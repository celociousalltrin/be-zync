import { BaseException } from './base.exception';
import { AppConstants } from '../constants';

export class CustomException extends BaseException {
  constructor(
    message = AppConstants.CUSTOM_EXCEPTION_DEFAULT_MSG,
    statusCode = AppConstants.CUSTOM_EXCEPTION_DEFAULT_CODE,
  ) {
    super({ message, statusCode });
  }
}
