import { connection } from '../../database/connection';

export default (id: number): Promise<any> => {
  return connection.query('SELECT * FROM articles WHERE id =$1', [id]);
};
