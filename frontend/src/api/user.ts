import client from './client';
import { User } from '../models/user';

export const getUser = (): User => ({
  username: '홍사장',
  userId: 'gagesajang@gmail.com',
  password: 'h12341234!',
  store: {
    name: '가게사장',
    address: '부산 강서구 녹산동 11-1',
    cs: '한식전문점',
    quarter: 40000000,
    clerk: 2,
    area: 20.4,
  },
});
