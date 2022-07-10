import { Member } from 'src/member/entities/member.entity';

export class MemberResponse {
  constructor(member: Member) {
    this.id = member.uuid;
    this.name = member.name;
    this.email = member.email;
    this.phone = member.phone;
    this.birthDate = member.birthDate;
    this.active = member.active;
    this.createdAt = member.createdAt;
    this.updatedAt = member.updatedAt;
  }

  id: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
