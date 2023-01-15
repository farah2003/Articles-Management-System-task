import { Genral, Articles } from 'src/interface';

export const articleInformation = (data: Genral.Body): Articles.Task => ({
  title: data.title as string,
  contant: data.contant as string,
  auther: data.auther as string,
  email: data.email as string,
});
