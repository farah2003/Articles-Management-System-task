import { connection } from './../../database/connection';

export default (userId: number, limit: number, page: number): Promise<any> => {
  const offest = limit * page;
  return connection.query(
    'select * from(select count(*) as total_count from tasks   where user_id =$1 ) as C left join  ( select * from tasks where user_id =$2  limit $3 offset $4 ) as T on true',
    [userId, userId, limit, offest]
  );
