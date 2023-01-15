import { connection } from '../../database/connection';
export default (
  rating: number,
  userId: number,
  articleId: number
): Promise<any> => {
  return connection.query(
    'INSERT INTO  ratings (scoring_by,article_id,rating) VALUES($1,$2,$3) RETURNING *',
    [userId, articleId, rating]
  );
};
