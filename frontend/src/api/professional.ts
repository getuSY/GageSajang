import { client1 as client } from './client';
import { ProfessionalResultParams } from '../models/professional';

export const ProfessionalResult = async (params: ProfessionalResultParams) => {
  const { data } = await client.post('simul/asset/already', params);
  return data;
};
