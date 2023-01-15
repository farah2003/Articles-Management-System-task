import { Genral, Articles } from 'src/interface';

export const articleRating = (data: Genral.Body): Articles.Rating => ({
  rating: data.rating as number,
});
