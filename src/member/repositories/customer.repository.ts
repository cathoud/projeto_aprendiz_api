// import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import CustomerException from 'src/errors/customer.exception';
// import { Customer } from '../entities/member';
// import { CreateCustomerRequest } from '../model/request/create.user.request';
// import { CustomerResponse } from '../model/response/customer.response';

// @Injectable()
// export class CustomerRepository {
//   constructor(
//     @InjectModel(Customer.name) private customerModel: Model<Customer>,
//   ) { }

//   public async create(
//     customer: CreateCustomerRequest,
//   ): Promise<CustomerResponse> {
//     const createdEntity = new this.customerModel(customer);
//     return createdEntity
//       .save()
//       .then((customerSaved) => new CustomerResponse(customerSaved))
//       .catch((errorToSave) => {
//         console.error(errorToSave);
//         throw new CustomerException(
//           'Ocorreu um erro ao salvar o customer',
//           400,
//         );
//       });
//   }

//   public async findByDocumentNumber(documentNumber: string) {
//     return this.customerModel.findOne({ documentNumber });
//   }

//   public async delete(id: string): Promise<void> {
//     return this.customerModel
//       .updateOne(
//         { _id: id },
//         {
//           active: false,
//         },
//       )
//       .then((res) => {
//         if (!res.n)
//           throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
//         if (!res.ok || !res.nModified) {
//           throw new HttpException(
//             'Não foi possível inativar o customer',
//             HttpStatus.BAD_REQUEST,
//           );
//         }
//         return;
//       });
//   }

//   public async activate(id: string) {
//     return this.customerModel
//       .updateOne(
//         { _id: id },
//         {
//           active: true,
//         },
//       )
//       .then((res) => {
//         if (!res.n)
//           throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
//         if (!res.ok || !res.nModified) {
//           throw new HttpException(
//             'Não foi possível ativar o customer',
//             HttpStatus.BAD_REQUEST,
//           );
//         }
//         return;
//       });
//   }

//   public async findById(id: string): Promise<Customer> {
//     return this.customerModel.findById(id).exec();
//   }

//   public async findAll(): Promise<Customer[]> {
//     return this.customerModel.find().exec();
//   }

//   public async update(id: string, data: any): Promise<void> {
//     return this.customerModel
//       .updateOne({ _id: id }, data)
//       .exec()
//       .then((res) => {
//         if (!res.n)
//           throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
//         if (!res.ok) {
//           throw new HttpException(
//             'Ocorreu um erro no processamento. Por favor, tente novamente mais tarde.',
//             HttpStatus.BAD_REQUEST,
//           );
//         }
//         return;
//       });
//   }
// }
