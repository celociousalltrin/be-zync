import { Injectable } from '@nestjs/common';
import { db } from './drizzle.client';

@Injectable()
export class DrizzleService {
  public readonly db = db;
}
