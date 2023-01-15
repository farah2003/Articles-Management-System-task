import { connection } from '../../database/connection';
export default (articleId: number): Promise<any> => {
  return connection.query('DELETE FROM articles WHERE id = $1;', [articleId]);
};
