import client from './client';
import { User, SignUpParams } from '../models/user';

export const getUser = (): User => ({ username: '홍사장' });

export const helloUser = (name: string) =>
  client.get(`user/hello?name=${name}`);

export const signUp = (params: SignUpParams) => {
  const response = client.post('user/signup', params);

  return response;
};
