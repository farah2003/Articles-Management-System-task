import { Request, Response, NextFunction } from 'express';
import { Auth } from './../../interface';
import { CustomError, verifyToken } from '../../helpers';
import { getUserById } from '../../queries';

export const checkUserRules = () => {
  return async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { token } = request.cookies;
      if (!token) throw CustomError('Unauthorized', 401);
      /// id or email
      const userPayload = (await verifyToken(token)) as Auth.Payload;
      const { rows } = await getUserById(userPayload.id);
      if (!rows.length) throw CustomError("User doesn't exist", 401);
      request.app.set('userData', userPayload);
      next();
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'invalid token') {
          next(CustomError('Unauthorized', 400));
        }
      }
      next(error);
    }
  };
};
