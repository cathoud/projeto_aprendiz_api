import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsMobilePhone,
  IsNotEmpty,
} from 'class-validator';

export class MemberDTO {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsMobilePhone('pt-BR')
  phone: string;

  @IsDate()
  @Type(() => Date)
  birthDate: Date;
}
