import { connection } from './../../database/connection';

export default (limit: number, page: number): Promise<any> => {
  const offest = limit * page;
  return connection.query(
    'SELECT article.*, (SELECT COUNT(*) FROM Comments WHERE article_id=article.id) AS total_comments FROM articles article limit $1 offset $2',

    [limit || 10, offest || 0]
  );
};
