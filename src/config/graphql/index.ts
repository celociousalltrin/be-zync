import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { GraphQLFormattedError } from 'graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      introspection: true,
      csrfPrevention: true,
      playground: false,
      formatError: (error: GraphQLFormattedError) => {
        return {
          message: error.message,
          statusCode: error.extensions?.statusCode || 500,
        };
      },
    }),
  ],
})
export class GraphQLConfigModule {}
