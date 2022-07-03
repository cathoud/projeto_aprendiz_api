import { HttpException } from '@nestjs/common';

export default class AuthException extends HttpException {
  constructor(message: string, status: number) {
    super(message, status);
  }
}
