import { Member } from 'src/member/entities/member';
import { MemberType } from 'src/member/enums/memberType';

export class MemberResponse {
  constructor(member: Member) {
    this.id = member.uuid;
    this.name = member.name;
    this.email = member.email;
    this.type = member.type;
    this.phone = member.phone;
    this.birthDate = member.birthDate;
    this.active = member.active;
    this.createdAt = member.createdAt;
    this.updatedAt = member.updatedAt;
  }

  id: string;
  name: string;
  email: string;
  type: MemberType;
  phone: string;
  birthDate: Date;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
