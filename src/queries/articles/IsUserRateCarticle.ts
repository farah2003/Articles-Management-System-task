import { connection } from './../../database/connection';

export default (articleId: number, userId: number): Promise<any> => {
  return connection.query(
    'SELECT * FROM ratings WHERE scoring_by =$1 AND  article_id =$2',
    [userId, articleId]
  );
};
