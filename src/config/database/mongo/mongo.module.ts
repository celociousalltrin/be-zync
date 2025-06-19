import { Module, Global, DynamicModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoService } from './mongo.service';
import { MongoSchemas } from './mongo.schema';

@Global()
@Module({})
export class MongoModule {
  static registerSchemas(): DynamicModule {
    return {
      module: MongoModule,
      imports: [
        MongooseModule.forRoot(process.env.NOSQL_DATABASE_URL!, {
          connectionName: 'mongo',
        }),
        MongooseModule.forFeature(MongoSchemas, 'mongo'),
      ],
      providers: [MongoService],
      exports: [MongoService],
    };
  }
}
