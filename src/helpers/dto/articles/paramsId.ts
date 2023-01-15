import { Genral, User } from '../../../interface';

export const ParamsId = (data: Genral.Params): User.ParamsId => {
  return {
    userId: data.userId as number,
    articleId: data.articleId as number,
  };
};
