// import { CreateMemberRequest } from './model/request/create.user.request';
// import { UpdateMemberRequest } from './model/request/update.customer.request';
import { MemberResponse } from './model/response/member.response';

export default interface IMemberService {
  // create(
  //   customerRequest: CreateMemberRequest,
  // ): Promise<MemberResponse | void>;
  // findAll(): Promise<MemberResponse[]>;
  findById(id: string): Promise<MemberResponse | null>;
  // update(id: string, customerRequest: UpdateMemberRequest): Promise<void>;
  // remove(id: string): Promise<void>;
  // activate(id: string): Promise<void>;
}
