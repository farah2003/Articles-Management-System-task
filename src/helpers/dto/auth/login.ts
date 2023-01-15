import { Genral, Auth } from 'src/interface';

export const loginData = (data: Genral.Body): Auth.LoginData => ({
  email: data.email as string,
  password: data.password as string,
});
