import { connection } from '../../database/connection';
export default (
  contant: string,
  title: string,
  image: string,
  email: string,
  auther: string
): Promise<any> => {
  return connection.query(
    'INSERT INTO articles (contant,title,image,email,auther) VALUES($1,$2,$3,$4,$5) RETURNING *',
    [contant, title, image, email, auther]
  );
};
