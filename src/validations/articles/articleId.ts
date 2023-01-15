import joi from 'joi';

export const articleId = joi.object({
  articleId: joi.number().required().integer(),
});
