import { connection } from '../../database/connection';

export default (
  username: string,
  email: string,
  password: string
): Promise<any> => {
  return connection.query(
    `INSERT INTO users(username,email,password) VALUES($1,$2,$3) RETURNING username,email,id`,
    [username, email, password]
  );
};
