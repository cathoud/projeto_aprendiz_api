import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthEncriptService } from './auth.encript.service';
import { AuthUser } from './entities/auth.user';
import { CreateAuthUserRequest } from './model/request/create.auth-user.request';
import { AuthUserRepository } from './repositories/auth-user.repository';

@Injectable()
export class AuthService {
  constructor(
    private logger: Logger,
    private authUserRepository: AuthUserRepository,
    private authEncriptService: AuthEncriptService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  public async create(
    createAuthUserRequest: CreateAuthUserRequest,
  ): Promise<CreateAuthUserRequest> {
    return this.authEncriptService
      .createHash(createAuthUserRequest.password)
      .then((passwordToken) => {
        createAuthUserRequest.password = passwordToken;

        this.logger.log(
          'Criando authUser com a request: ' +
            JSON.stringify(createAuthUserRequest),
        );

        return this.authUserRepository.create(createAuthUserRequest);
      });
  }

  public async validate(username: string, password: string): Promise<AuthUser> {
    return this.authUserRepository
      .getByUsername(username)
      .then((authUser) => {
        if (authUser)
          return this.authEncriptService
            .verifyHash(authUser.password, password)
            .then((found) => {
              if (found) return authUser;
              else throw new UnauthorizedException('Senha incorreta.');
            });
        else throw new UnauthorizedException('Usuário não encontrado.');
      })
      .catch((errorToFind) => {
        this.logger.error(errorToFind);
        throw new UnauthorizedException('Usuário ou senha inválida.');
      });
  }

  public async login(user: any) {
    const payload = {
      username: user.username,
      payload: user.payload,
      scope: user.scope,
      sub: user._id,
    };

    const access_token = await this.jwtService.signAsync(payload, {
      privateKey: this.configService.get('JWT_PRIVATE_KEY'),
      expiresIn: this.configService.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME'),
    });

    const refresh_token = await this.jwtService.signAsync(payload, {
      privateKey: this.configService.get('JWT_REFRESH_PRIVATE_KEY'),
      expiresIn: this.configService.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME'),
    });

    const hashedRefreshToken = await this.authEncriptService.createHash(
      refresh_token,
    );

    const updatedUserRefreshToken =
      await this.authUserRepository.updateHashedToken(
        user.username,
        hashedRefreshToken,
      );

    return {
      payload: user.payload,
      scope: user.scope,
      access_token: access_token,
      refresh_token: refresh_token,
    };
  }

  public async logout(user: any) {
    const updatedUserRefreshToken =
      await this.authUserRepository.updateHashedToken(user.username, null);
    return;
  }

  public async getUserIfRefreshTokenMatches(
    refreshToken: string,
    username: string,
  ) {
    const authUser = await this.authUserRepository.getByUsername(username);

    const isRefreshTokenMatching = await this.authEncriptService.verifyHash(
      authUser.currentHashedRefreshToken,
      refreshToken,
    );

    if (isRefreshTokenMatching) {
      return authUser;
    }
  }
}
