import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthInput } from './dto/create-auth.input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { DrizzleService } from 'src/config/database/drizzle/drizzle.service';
import { users } from './auth.drizzle.schema';
import { getResponseMessage } from 'src/shared/utils';
import { CustomException } from 'src/shared/errors';

@Injectable()
export class AuthService {
  constructor(private readonly drizzle: DrizzleService) {}
  async create(createAuthInput: CreateAuthInput) {
    await this.drizzle.db.insert(users).values(createAuthInput);
    return getResponseMessage('OK0001');
  }

  findAll() {
    // throw new CustomException('Sss', 22);
    throw new BadRequestException('New error');
    return 'This returns the All the authentciate users';
  }

  findOne(id: string) {
    return `This action returns a #${id} auth`;
  }

  update(id: string, updateAuthInput: UpdateAuthInput) {
    return `This action updates a #${id} auth`;
  }

  remove(id: string) {
    return `This action removes a #${id} auth`;
  }
}
