import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';
import AuthException from './exceptions/auth.exception';

@Injectable()
export class AuthEncriptService {
  async createHash(password: string): Promise<string> {
    return argon2.hash(password).catch((errorOnGenerateHash) => {
      console.error(errorOnGenerateHash);
      throw new AuthException(
        'Ocorreu um erro ao criar o usuário no Auth',
        500,
      );
    });
  }

  async verifyHash(hash: string, password: string): Promise<boolean> {
    return argon2.verify(hash, password).catch((errorOnVerifyHash) => {
      console.error(errorOnVerifyHash);
      throw new AuthException(
        'Ocorreu um erro ao verificar o usuário no Auth',
        500,
      );
    });
  }
}
