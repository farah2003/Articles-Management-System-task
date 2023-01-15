import { Genral, User } from '../../../interface';

export const ParamsId = (data: Genral.Params): User.ParamsId => {
  return {
    articleId: data.articleId as number,
  };
};
