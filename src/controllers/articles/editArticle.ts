import { NextFunction, Request, Response } from 'express';
import { editArtileDB, ifArticleEXist } from '../../queries';
import { CustomError, DTO, uploadFile } from '../../helpers';
export const editArticle = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const body = DTO.bodyData(request);
    const modifiedBody = JSON.parse(JSON.stringify(body));
    const { contant, title, email, auther, id } =
      DTO.modifiedArticle(modifiedBody);
    const { Location: location } = await uploadFile(request?.file);

    const { email: userEmail } = request.app.get('userData');
    const { rows, rowCount } = await ifArticleEXist(id);
    if (!rowCount) {
      throw CustomError("Article is't exist", 400);
    }
    const autherArticleEmail = rows[0].email;
    if (autherArticleEmail !== userEmail) {
      throw CustomError('Unautharized  user', 400);
    }
    const { rows: editablerow } = await editArtileDB(
      contant,
      title,
      location,
      email,
      auther
    );
    response.json({
      message: 'Article edit successfully',
      rows,
      editablerow,
    });
  } catch (error) {
    next(error);
  }
};
