import { connection } from './../../database/connection';

export default (id: number): Promise<any> => {
  return connection.query('select * from users where id =$1', [id]);
};
