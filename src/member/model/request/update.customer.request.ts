import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsMobilePhone,
  IsNotEmpty,
} from 'class-validator';

//Definir campos que podem ser editados
export class UpdateMemberRequest {
  name: string;
  email: string;
  phone: string;
  documentNumber: string;

  @Type(() => Date)
  birthDate: Date;
}
