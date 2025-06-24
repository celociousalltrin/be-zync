import { responseMessage } from '../constants/response-message';

export const getResponseMessage = (
  code: keyof typeof responseMessage,
  placeholderValues: string[] = [],
) => {
  return responseMessage[code].message.replace(
    /{}/g,
    () => placeholderValues.shift() || '',
  );
};
