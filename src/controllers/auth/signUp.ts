import { hash } from 'bcryptjs';
import { Request, Response, NextFunction } from 'express';
import { DTO, CustomError, signToken } from '../../helpers';
import { addNewUser, hasEmailExist } from '../../queries';

export const signUp = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const body = DTO.bodyData(request);
    const { email, password, userName } = DTO.signUpData(body);

    const { rows } = await hasEmailExist(email);
    if (rows.length) {
      throw CustomError('Email is already used', 400);
    }

    const hashedPassword = await hash(password, 10);

    const { rows: user } = await addNewUser(userName, email, hashedPassword);
    const payload = user[0];

    const token = await signToken(payload);

    response.cookie('token', token, {
      maxAge: 2 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    response.json({ message: 'Sign up successful', data: payload });
  } catch (error) {
    next(error);
  }
};
