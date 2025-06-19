import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DrizzleModule } from './config/database/drizzle/drizzle.module';
import { MongoModule } from './config/database/mongo/mongo.module';
import { GraphQLConfigModule } from './config/graphql';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // ✅ so you don’t need to re-import it in every module
      envFilePath: '.env', // optional if .env is in root
    }),
    GraphQLConfigModule,
    AuthModule,
    DrizzleModule,
    MongoModule.registerSchemas(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
