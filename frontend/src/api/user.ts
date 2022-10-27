import client from './client';
import { User } from '../models/user';

export const getUser = (): User => ({ username: '홍사장' });
