import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Auth {
  @Field(() => String, { description: 'User FirstName' })
  firstName: string;

  @Field(() => String, { description: 'User LastName' })
  lastName: string;

  @Field(() => String, { description: 'User Email' })
  email: string;

  @Field(() => String, { description: 'User PhoneNumber' })
  phoneNumber: string;

  @Field(() => String, { description: 'User User Name' })
  userName: string;

  @Field(() => String, { description: 'User Passwordß' })
  password: string;
}
