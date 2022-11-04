import client from './client';
import { User, UserModel } from '../models/user';

export const helloUser = async (name: string) => {
  const { data } = await client.get(`user/hello?name=${name}`);

  return data;
};

export const userSignUp = async (params: UserModel) => {
  const { data } = await client.post('user/signup', params);

  return data;
};

export const userLogin = async (params: UserModel) => {
  const { data } = await client.post('user/login', params);

  return data;
};
