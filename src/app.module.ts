import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberModule } from './member/member.module';
import { mysqlDataSourceOptions } from './resources/appDataSource';

@Module({
  imports: [
    TypeOrmModule.forRoot(mysqlDataSourceOptions),
    MemberModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
