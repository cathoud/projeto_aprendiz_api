import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import AuthUserException from 'src/errors/auth-user.exception';
import { AuthUser } from '../entities/auth.user';
import { CreateAuthUserRequest } from '../model/request/create.auth-user.request';

@Injectable()
export class AuthUserRepository {
  constructor(
    @InjectModel(AuthUser.name) private authUserModel: Model<AuthUser>,
    private logger: Logger,
  ) {}

  public async create(authUser: CreateAuthUserRequest): Promise<AuthUser> {
    const createdEntity = new this.authUserModel(authUser);

    return createdEntity.save().catch((errorGenerateToken) => {
      this.logger.error(errorGenerateToken);
      throw new AuthUserException('Ocorreu um erro ao salvar o authUser', 400);
    });
  }

  public async getByUsername(username: string): Promise<AuthUser> {
    return this.authUserModel.findOne({ username }).exec();
  }

  public async updateHashedToken(username: string, hashedToken: string) {
    return this.authUserModel.updateOne(
      { username },
      { currentHashedRefreshToken: hashedToken },
    );
  }
}
