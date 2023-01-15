import { Auth } from './../../interface';
import { verify } from 'jsonwebtoken';
import config from '../../config';
const {
  system: { secretKey },
} = config;
export const verifyToken = (token: string): Promise<Error | Auth.Payload> => {
  return new Promise((reslove, reject) => {
    verify(token, secretKey, (error, decoded) => {
      if (error) {
        reject(error);
      } else {
        reslove(decoded as Auth.Payload);
      }
    });
  });
};
