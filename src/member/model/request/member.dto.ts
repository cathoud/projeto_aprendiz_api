import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsMobilePhone,
  IsNotEmpty,
} from 'class-validator';
import { MemberType } from 'src/member/enums/memberType';

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

  @IsEnum(MemberType)
  type: MemberType;
}
