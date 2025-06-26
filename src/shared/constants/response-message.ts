type TTypeEnum = 'SUCCESS' | 'ERROR' | 'WARN';

type TResponseMessage = {
  message: string;
  type: TTypeEnum;
};

export const responseMessage = {
  OK0001: {
    message: 'User Registered Successfully',
    type: 'SUCCESS',
  },
  ERR999: {
    message: 'Something Went Wrong',
    type: 'ERROR',
  },
  ERR001: {
    message: 'The {} already exist',
    type: 'ERROR',
  },
} as const satisfies Record<string, TResponseMessage>;
