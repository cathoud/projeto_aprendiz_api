import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { forwardRef, Logger, Module } from '@nestjs/common';
import { AuthEncriptService } from './auth.encript.service';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthUser, AuthUserSchema } from './entities/auth.user';
import { AuthUserRepository } from './repositories/auth-user.repository';
import { AuthStrategies } from './strategies';
// import { CustomerModule } from 'src/customer/customer.module';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const options: JwtModuleOptions = {
          //privateKey: configService.get('JWT_PRIVATE_KEY'),
          //publicKey: configService.get('JWT_PUBLIC_KEY'),
          signOptions: {
            //expiresIn: '3h',
            issuer: 'full-basket.com.br',
            algorithm: 'RS256',
          },
        };
        return options;
      },
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      { name: AuthUser.name, schema: AuthUserSchema },
    ]),
    forwardRef(() => CustomerModule),
  ],
  exports: [AuthService],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthEncriptService,
    AuthUserRepository,
    ...AuthStrategies,
    Logger,
  ],
})

// eslint-disable-next-line prettier/prettier
export class AuthModule { }
