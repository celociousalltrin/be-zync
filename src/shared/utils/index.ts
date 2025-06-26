import { responseMessage } from '../constants';

export const getResponseMessage = (
  code: keyof typeof responseMessage,
  placeholderValues: string[] = [],
) => {
  return responseMessage[code].message.replace(
    /{}/g,
    () => placeholderValues.shift() || '',
  );
};

export const constructErrColumns = (columns: string[]) => {
  let lastColumn = columns.pop();
  let joinedColumns = columns.length
    ? `${columns.join(',')} and ${lastColumn}`
    : (lastColumn as string);

  return joinedColumns;
};
