import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { PgTable } from 'drizzle-orm/pg-core';
import { db } from 'src/config/database/drizzle/drizzle.client';
import { constructErrColumns, getResponseMessage } from '../utils';

@Injectable()
export class UniqueFiledPipes<T extends PgTable> implements PipeTransform {
  constructor(
    private readonly table: T,
    private readonly keys: (keyof T['_']['columns'])[],
  ) {}
  async transform(value: any, metadata: ArgumentMetadata) {
    let existingFields: string[] = [];

    let queries = this.keys.map((key) =>
      db
        .select()
        .from(this.table as any)
        .where(eq(this.table[key as any], value[key]))
        .limit(1),
    );

    const result = await Promise.all(queries);

    result.forEach((res, index) => {
      if (res.length) {
        existingFields.push(this.keys[index] as string);
      }
    });

    if (!existingFields.length) {
      return value;
    }
    let columns = constructErrColumns(existingFields);
    let errMsg = getResponseMessage('ERR001', [columns]);
    throw new BadRequestException(errMsg);
  }
}
