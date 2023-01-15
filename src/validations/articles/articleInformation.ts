import joi from 'joi';

export const articleInformarionSchema = joi.object({
  title: joi.string().required(),
  contant: joi.string().required(),
  email: joi.string().email().required(),
  auther: joi.string().required(),
});
