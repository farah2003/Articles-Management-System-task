import Joi from 'joi';
export const paramsIdSchema = Joi.object({
  userId: Joi.number().integer().required().min(1),
  articleId: Joi.number().integer().required().min(1),
});
