import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Schema()
export class AuthUser extends Document {
  @Prop({
    default: uuidv4,
  })
  _id: string;

  @Prop()
  scope: string[];

  @Prop({
    type: Map,
    of: String,
  })
  payload: any;

  @Prop({
    required: true,
  })
  password: string;

  @Prop({
    required: true,
    unique: true,
  })
  username: string;

  @Prop({
    default: false,
  })
  block: boolean;

  @Prop({
    default: true,
  })
  active: boolean;

  @Prop()
  currentHashedRefreshToken: string;

  @Prop({
    default: Date.now,
  })
  createdAt: Date;

  @Prop({
    default: Date.now,
  })
  updatedAt: Date;
}

export const AuthUserSchema = SchemaFactory.createForClass(AuthUser);
