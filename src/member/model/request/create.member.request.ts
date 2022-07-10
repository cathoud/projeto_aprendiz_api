import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsMobilePhone,
  IsNotEmpty,
} from 'class-validator';

export class CreateMemberRequest {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsMobilePhone('pt-BR')
  @IsNotEmpty()
  phone: string;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  birthDate: Date;

  @IsNotEmpty()
  password: string;
}
