import { Auth } from '../../interface';
import { sign } from 'jsonwebtoken';
import config from '../../config';

export const signToken = (
  payload: Auth.Payload
): Promise<string | Error | undefined> => {
  return new Promise((resolve, reject) => {
    sign(payload, config.system.secretKey, (error, token) => {
      if (error) {
        reject(error);
      }
      resolve(token);
    });
  });
};
