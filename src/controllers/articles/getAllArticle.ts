import { Request, Response, NextFunction } from 'express';
import { getAllArticles } from '../../queries';
import { DTO } from '../../helpers';
export const getallArticles = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const query = DTO.queryData(request);
    const { page, limit } = DTO.pagination(query);
    console.log(page);
    const { rows } = await getAllArticles(limit, page - 1);
    response.json({ message: 'Get articles successful', rows });
  } catch (error) {
    next(error);
  }
};
