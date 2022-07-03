import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { AuthUser } from '../entities/auth.user';

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token',
) {
  constructor(
    private configService: ConfigService,
    private authService: AuthService,
  ) {
    super({
      secretOrKey: configService.get('JWT_REFRESH_PUBLIC_KEY'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      algorithms: ['RS256'],
      passReqToCallback: true,
    });
  }

  async validate(request: any, payload: any) {
    const resfreshToken = request.headers?.authorization.split(' ')[1];
    return this.authService.getUserIfRefreshTokenMatches(
      resfreshToken,
      payload.username,
    );
  }
}
