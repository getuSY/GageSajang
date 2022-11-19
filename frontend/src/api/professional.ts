import { client1 as client } from './client';
import {
  ProfessionalResultParams,
  ProfessionalSimulationParams,
} from '../models/professional';

export const professionalResult = async (params: ProfessionalResultParams) => {
  const resultParams = { ...params, dongName: params.dongName?.split(' ')[1] };
  const { data } = await client.post('simul/asset/already', resultParams);
  return data;
};

export const professionalSales = async (
  params: ProfessionalSimulationParams
) => {
  const salesParams = { ...params, dongName: params.dongName?.split(' ')[1] };
  const { data } = await client.post('simul/sales/already', salesParams);
  console.log('sales', data, 'params', params);
  return data;
};

export const professionalLife = async (
  params: ProfessionalSimulationParams
) => {
  const { data } = await client.post('simul/life/already', params);

  return data;
};

export const professionalResident = async (
  params: ProfessionalSimulationParams
) => {
  const { data } = await client.post('simul/resident/already', params);

  return data;
};

export const professionalJob = async (params: ProfessionalSimulationParams) => {
  const { data } = await client.post('simul/job/already', params);

  return data;
};

export const professionalCount = async (
  params: ProfessionalSimulationParams
) => {
  const { data } = await client.post('simul/count/already', params);

  return data;
};
