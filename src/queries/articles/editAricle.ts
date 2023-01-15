import { connection } from '../../database/connection';
export default (
  contant: string,
  title: string,
  image: string,
  email: string,
  auther: string
): Promise<any> => {
  return connection.query(
    'UPDATE articles SET contant =$1, title =$2,image=$3,email =$4,auther=$5',
    [contant, title, image, email, auther]
  );
};
