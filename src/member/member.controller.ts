import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpException,
  UseGuards,
  Request,
  Logger,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
// import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { MemberService } from './member.service';
// import { CreateMemberRequest } from './model/request/create.member.request';
// import { UpdateMemberRequest } from './model/request/update.customer.request';

@Controller('member')
export class MemberController {
  constructor(
    private memberService: MemberService,
    // private logger: Logger,
  ) { }

  // @Post()
  // create(@Body() customerRequest: CreateMemberRequest) {
  //   return this.customerService.create(customerRequest);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Get('/')
  // findAll(@Request() req: any) {
  //   const customerId = req.user.payload.customerId;

  //   if (!customerId)
  //     throw new HttpException(
  //       'Ocorreu um erro ao buscar o customer.',
  //       HttpStatus.INTERNAL_SERVER_ERROR,
  //     );

  //   this.logger.log('Iniciando a busca do customer com id' + customerId);
  //   return this.customerService.findById(customerId);
  // }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.memberService.findById(id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() customerRequest: UpdateMemberRequest,
  // ) {
  //   return this.customerService.update(id, customerRequest);
  // }

  // @Patch('activate/:id')
  // activate(@Param('id') id: string) {
  //   return this.customerService.activate(id);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.customerService.remove(id);
  // }
}
