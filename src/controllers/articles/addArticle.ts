import { NextFunction, Request, Response } from 'express';
import { addArticleDB } from '../../queries';
import { DTO, uploadFile } from '../../helpers';

export const addArticle = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const body = DTO.bodyData(request);
    const modifiedBody = JSON.parse(JSON.stringify(body));
    const { contant, title, email, auther } =
      DTO.articleInformation(modifiedBody);
    const { Location: location } = await uploadFile(request?.file);
    const { rows } = await addArticleDB(
      contant,
      title,
      location,
      email,
      auther
    );
    response.json({ message: 'Article added successful', rows });
  } catch (error) {
    next(error);
  }
};
