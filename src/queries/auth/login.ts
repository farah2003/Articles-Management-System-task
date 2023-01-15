import { connection } from '../../database/connection';

export default (): Promise<any> => {
  return connection.query('SELECT * FROM users');
};
