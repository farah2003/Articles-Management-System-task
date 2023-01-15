import { Request, Response, NextFunction } from 'express';
import { DTO, CustomError } from '../../helpers';

import {
  articleRating,
  getArticleById,
  userRatingArticle,
} from '../../queries';
export const rateArticle = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const param = DTO.paramsData(request);
    const body = DTO.bodyData(request);
    const { articleId } = DTO.ParamsId(param);
    const { rating } = DTO.articleRating(body);

    const { id } = request.app.get('userData');

    const { rowCount } = await getArticleById(articleId);
    if (!rowCount) {
      throw CustomError("The article doesn't exist", 400);
    }

    const { rowCount: ratedArticle } = await userRatingArticle(articleId, id);
    if (ratedArticle) {
      throw CustomError('you already rate this article', 400);
    }
    const { rows } = await articleRating(rating, id, articleId);
    response.json({
      name: 'Rating article successful',
      rows,
    });
  } catch (error) {
    next(error);
  }
};
