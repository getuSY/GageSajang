import { EphemeralKeyInfo } from 'tls';

export interface User {
  username: string;
  userId: string;
  password: string;
  store: object;
}
