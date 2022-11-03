import client from './client';
import { User, SignUpParams } from '../models/user';

export const getUser = (): User => ({ username: '홍사장' });

export const signUp = async (params: SignUpParams) => {
  const response = client.post('user/', params);

  return response;
};
