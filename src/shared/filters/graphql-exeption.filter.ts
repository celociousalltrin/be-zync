import { Catch, HttpException } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';

@Catch(HttpException)
export class GraphqlExceptionFilter implements GqlExceptionFilter {
  catch(exception: HttpException) {
    const response = exception.getResponse();
    const statusCode = exception.getStatus();
    let message =
      typeof response === 'string'
        ? response
        : (response as any)?.message || exception.message;

    throw new GraphQLError(message, {
      extensions: {
        statusCode,
      },
    });
  }
}
