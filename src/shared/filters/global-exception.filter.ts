import { ExceptionFilter, Catch, HttpException } from '@nestjs/common';
import { AppConstants } from '../constants';
import { GraphQLError } from 'graphql';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any) {
    let exceptionName = exception?.constructor?.name;
    console.log('🚀 ~ GlobalExceptionFilter ~ exceptionName:', exceptionName);

    if (exceptionName === AppConstants.DRIZZLE_QUERY_ERROR) {
      let { msg, code } = getDrizzleErrCodeAndMsg(exception);
      if (msg && code) {
        throwGraphQLError(msg, Number(code));
      }
    } else if (exception instanceof HttpException) {
      let { msg, code } = getHttpExceptionErrCodeAndMsg(exception);
      if (msg && code) {
        throwGraphQLError(msg, code);
      }
    }
    throwGraphQLError(
      AppConstants.CUSTOM_EXCEPTION_DEFAULT_MSG,
      AppConstants.CUSTOM_EXCEPTION_DEFAULT_CODE,
    );
  }
}

const throwGraphQLError = (message: string, statusCode: number) => {
  throw new GraphQLError(message, {
    extensions: { statusCode },
  });
};

const getDrizzleErrCodeAndMsg = (exception: any) => {
  let cause = exception?.cause;
  let code = cause?.code;
  let msg = cause?.detail;
  return { code, msg };
};

const getHttpExceptionErrCodeAndMsg = (exception: HttpException) => {
  const response = exception.getResponse();
  const code = exception.getStatus();
  let msg =
    typeof response === 'string'
      ? response
      : (response as any)?.message || exception.message;

  return { msg, code };
};
