import { Request, Response, NextFunction } from 'express';
import { DTO, CustomError } from '../../helpers';
import { deleteArticleDB, ifArticleEXist } from '../../queries';

export const deleteArticle = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const param = DTO.paramsData(request);
    const { articleId } = DTO.ParamsId(param);
    const { email: userEmail } = request.app.get('userData');
    const { rows, rowCount } = await ifArticleEXist(articleId);
    if (!rowCount) {
      throw CustomError("Article is't exist", 400);
    }
    const autherArticleEmail = rows[0].email;

    if (autherArticleEmail !== userEmail) {
      throw CustomError('Unautharized  user', 400);
    }
    const data = await deleteArticleDB(articleId);
    response.json({
      name: 'delete article successful',
      userEmail,
      autherArticleEmail: rows,
      data,
    });
  } catch (error) {
    next(error);
  }
};
