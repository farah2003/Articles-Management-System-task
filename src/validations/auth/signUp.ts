import joi from 'joi';

export const signUpSchema = joi.object({
  userName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required().min(6).max(20),
});
