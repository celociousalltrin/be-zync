import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateAuthInput {
  @Field(() => String, { description: 'User FirstName', nullable: false })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @Field(() => String, { description: 'User LastName', nullable: false })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @Field(() => String, { description: 'User Email', nullable: false })
  @IsString()
  @IsNotEmpty()
  email: string;

  @Field(() => String, { description: 'User PhoneNumber', nullable: false })
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @Field(() => String, { description: 'User User Name', nullable: false })
  @IsString()
  @IsNotEmpty()
  userName: string;

  @Field(() => String, { description: 'User Passwordß', nullable: false })
  @IsString()
  @IsNotEmpty()
  password: string;
}
