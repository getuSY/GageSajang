import { EphemeralKeyInfo } from 'tls';

export interface User {
  username: string;
  userId: string;
  password: string;
  store: object;
}

export interface UserModel {
  accessToken: string;
  auth: string;
  email: string;
  id: 0;
  nickName: string;
  pw: string;
  refreshToken: string;
  state: 0;
  type: string;
}
