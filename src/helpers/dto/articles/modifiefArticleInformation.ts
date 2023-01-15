import { Genral, Articles } from 'src/interface';

export const modifiedArticle = (data: Genral.Body): Articles.ModifiedTask => ({
  id: data.id as number,
  title: data.title as string,
  contant: data.contant as string,
  auther: data.auther as string,
  email: data.email as string,
});
