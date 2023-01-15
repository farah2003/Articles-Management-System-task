import joi from 'joi';

export const articleRatingSchema = joi.object({
  rating: joi.number().required().min(0).max(5),
});
