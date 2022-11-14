import { client1 as client } from './client';
import { UserModel } from '../models/user';

export const helloUser = async (name: string) => {
  const { data } = await client.get(`user/hello?name=${name}`);

  return data;
};

export const userSignUp = async (params: UserModel) => {
  const { data } = await client.post('user/auth/signup', params);

  return data;
};

export const userLogin = async (params: UserModel) => {
  const { data } = await client.post('user/auth/login', params);

  const { token } = data;

  sessionStorage.setItem('token', token);
  const info = await userInfo();

  return data;
};

export const userInfo = async () => {
  if (sessionStorage.getItem('token')) {
    const { data } = await client.get('user/auth/getUserInfo');
    return data;
  }
  return null;
};
