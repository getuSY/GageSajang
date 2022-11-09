import client from './client';
import { ProfessionalResultParams } from '../models/professional';

export const ProfessionalResult = async (params: ProfessionalResultParams) => {
  const { data } = await client.post('asset/already', params);
  // store, sales, status로 받기
  return data;
};
