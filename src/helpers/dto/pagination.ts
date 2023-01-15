import { Genral } from '../../interface';
interface Pagination {
  limit: number;
  page: number;
}
export const pagination = (data: Genral.Query): Pagination => ({
  limit: data.limit as number,
  page: data.page as number,
});
