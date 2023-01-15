import { Request, Response, NextFunction } from 'express';
import { DTO, CustomError } from '../../helpers';

import {
  articleRating,
  ifArticleEXist,
  isUserRateArtilce,
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
    console.log(articleId);

    const { id } = request.app.get('userData');

    const { rowCount } = await ifArticleEXist(articleId);
    if (!rowCount) {
      throw CustomError("The article doesn't exist", 400);
    }

    const { rowCount: ratedArticle } = await isUserRateArtilce(articleId, id);
    console.log(rowCount, ratedArticle);
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
