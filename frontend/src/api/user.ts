import { client1 as client } from './client';
import { UserModel } from '../models/user';
import { ProfessionalResultParams } from '../models/professional';

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
  await userInfo();

  return data;
};

export const userInfo = async () => {
  if (sessionStorage.getItem('token')) {
    const { data } = await client.get('user/auth/getUserInfo');
    return data;
  }
  return null;
};

export const storeInfo = async () => {
  const email = sessionStorage.getItem('email');
  const { data } = await client.get(`user/store/getStore/${email}`);

  return data;
};

export const storeInfoFix = async (params: ProfessionalResultParams) => {
  const { data } = await client.post('user/store/setStore', params);

  return data;
};
