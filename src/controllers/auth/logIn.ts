import { NextFunction, Request, Response } from 'express';
import { compare } from 'bcryptjs';
import { getUserByEmail } from '../../queries';
import { DTO, CustomError, signToken } from '../../helpers';

export const login = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const body = DTO.bodyData(request);
    const { email, password } = DTO.loginData(body);
    const { rows } = await getUserByEmail(email);
    if (!rows.length) {
      throw CustomError('Invalid credentials', 400);
    }
    const isValid = await compare(password, rows[0].password);
    if (!isValid) {
      throw CustomError('Invalid credentials', 400);
    }
    const payload = {
      username: rows[0].username,
      email: rows[0].email,
      id: rows[0].id,
    };
    const token = await signToken(payload);

    response.cookie('token', token, {
      maxAge: 2 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    response.json({ message: 'Login successful', data: payload });
  } catch (error) {
    next(error);
  }
};
