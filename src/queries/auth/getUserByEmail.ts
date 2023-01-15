import { connection } from './../../database/connection';
export default (email: string): Promise<any> => {
  return connection.query('SELECT * from users where email = $1 ', [email]);
};
