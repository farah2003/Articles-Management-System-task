import { Genral, Auth } from '../../../interface';

export const signUpData = (data: Genral.Body): Auth.signUpData => ({
  userName: data.userName as string,
  email: data.email as string,
  password: data.password as string,
});
