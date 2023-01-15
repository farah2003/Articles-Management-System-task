import Joi from 'joi';

export const paginationSchema = Joi.object({
  page: Joi.number().min(0),
  limit: Joi.number().min(1),
});
