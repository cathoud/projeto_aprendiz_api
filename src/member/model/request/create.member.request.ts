import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsMobilePhone,
  IsNotEmpty,
} from 'class-validator';
import { MemberType } from 'src/member/enums/memberType';

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

  @IsEnum(MemberType)
  @IsNotEmpty()
  type: MemberType;

  @IsNotEmpty()
  password: string;
}
