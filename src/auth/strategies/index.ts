import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { JwtRefreshTokenStrategy } from './jwt-refresh.token.strategy';

export const AuthStrategies = [
  LocalStrategy,
  JwtStrategy,
  JwtRefreshTokenStrategy,
];
