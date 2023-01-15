import Joi from 'joi';
export const paramsIdSchema = Joi.object({
  articleId: Joi.number().integer().required().min(1),
});
