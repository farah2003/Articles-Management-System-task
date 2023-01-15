import { Request, Response, NextFunction } from 'express';
import { DTO, CustomError } from '../../helpers';
import { deleteArticleDB } from '../../queries';
export const deleteArticle = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const param = DTO.paramsData(request);
    const articleId: number = param.articleId as number;
    const rows = await deleteArticleDB(articleId);

    response.json({
      name: 'Rating article successful',
      rows,
    });
  } catch (error) {
    next(error);
  }
};
