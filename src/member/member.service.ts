import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import IMemberService from './member.service.interface';
import { CreateMemberRequest } from './model/request/create.member.request';
import { UpdateMemberRequest } from './model/request/update.customer.request';
import { MemberResponse } from './model/response/member.response';
// import { MemberRepository } from './repositories/customer.repository';
// import { AuthService } from 'src/auth/auth.service';
// import { CreateAuthUserRequest } from 'src/auth/model/request/create.auth-user.request';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MemberService implements IMemberService {
  constructor(
    @InjectRepository(Member)
    private memberRepository: Repository<Member>
  ) { }

  // create(customerRequest: CreateMemberRequest): Promise<void | MemberResponse> {
  //   throw new Error('Method not implemented.');
  // }

  // async findAll(): Promise<MemberResponse[]> {
  //   this.logger.log('Retrieving list of customers');
  //   return this.customerRepository
  //     .findAll()
  //     .then((i) => i.map((j) => new MemberResponse(j)));
  // }

  async findById(id: string): Promise<MemberResponse | null> {
    return this.memberRepository.findOneBy({
      uuid: id
    }).then((customer) => {
      if (!customer)
        throw new HttpException('Member not found', HttpStatus.NOT_FOUND);
      return new MemberResponse(customer);
    });
  }

  // async update(
  //   id: string,
  //   customerRequest: UpdateMemberRequest,
  // ): Promise<void> {
  //   if (id) throw new Error('Algum erro');
  //   // if (id) throw new HttpException('Algum erro', HttpStatus.BAD_REQUEST);
  //   return this.customerRepository.update(id, {
  //     ...customerRequest,
  //   });
  // }

  // async remove(id: string): Promise<void> {
  //   return this.customerRepository.delete(id);
  // }

  // async activate(id: string): Promise<void> {
  //   return this.customerRepository.activate(id);
  // }
}
