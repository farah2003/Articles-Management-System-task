import joi from 'joi';

export const modifiedArticleSchema = joi.object({
  id: joi.number().required().integer(),
  title: joi.string().required(),
  contant: joi.string().required(),
  email: joi.string().email().required(),
  auther: joi.string().required(),
});
