import { IsNotEmpty } from 'class-validator';
import { CreateAuthInput } from './create-auth.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAuthInput extends PartialType(CreateAuthInput) {
  @Field(() => String, {
    description: 'PK for the user table',
    nullable: false,
  })
  @IsNotEmpty()
  id: string;
}
