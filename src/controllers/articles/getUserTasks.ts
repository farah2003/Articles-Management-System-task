import { Request, Response, NextFunction } from 'express';
import { DTO } from '../../helpers';
// import { getUserTask } from '../../queries';
export const getUserTasks = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // const param = DTO.paramsData(request);
    // const query = DTO.queryData(request);
    // // const { userId } = DTO.UserId(param);
    // const { page, limit } = DTO.pagination(query);
    // const { rows } = await getUserTask(userId, limit, page - 1);
    response.json({ name: 'Get  successful' });
  } catch (error) {
    next(error);
  }
};
