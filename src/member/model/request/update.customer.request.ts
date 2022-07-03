import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsMobilePhone,
  IsNotEmpty,
} from 'class-validator';
import { MemberType } from 'src/member/enums/memberType';

//Definir campos que podem ser editados
export class UpdateMemberRequest {
  name: string;
  email: string;
  phone: string;
  documentType: MemberType;
  documentNumber: string;

  @Type(() => Date)
  birthDate: Date;
}
