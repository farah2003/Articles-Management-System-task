import { ModifiedError } from '../../interface';

export const CustomError = (
  message: string,
  statusCode: number
): ModifiedError.CustomeError => {
  const error: ModifiedError.CustomeError = new Error(message);
  error.statusCode = statusCode;
  return error;
};
