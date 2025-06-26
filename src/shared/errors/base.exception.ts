import { HttpException } from '@nestjs/common';
import { TErrorResponse } from './errors.type';

export class BaseException extends HttpException {
  constructor(errorResponse: TErrorResponse) {
    super(errorResponse, errorResponse.statusCode);
  }
}
