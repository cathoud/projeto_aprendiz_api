import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtRefreshGuard } from './guards/jwt-refresh.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CreateAuthUserRequest } from './model/request/create.auth-user.request';

@Controller('/auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private configService: ConfigService,
  ) {}

  @Post('/users')
  async create(@Body() createAuthUserRequest: CreateAuthUserRequest) {
    return this.authService.create(createAuthUserRequest);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtRefreshGuard)
  @Post('/refresh')
  async refresh(@Request() req: any) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/logout')
  async logout(@Request() req: any) {
    return this.authService.logout(req.user);
  }

  @Get('/.well-known/jwks.json')
  async getJwks() {
    return this.configService.get('JWKS');
  }
}
