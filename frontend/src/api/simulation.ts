import { client1 as client } from './client';
import { SimulationParams } from '../models/simultaion';

export const AmaSalesSimulation = async (params: SimulationParams) => {
  const { data } = await client.get(
    `simul/sales/maybe/${params.dongName}/${params.industryName}`
  );

  return data;
};

export const ProSalesSimulation = async (params: SimulationParams) => {
  const { data } = await client.post('simul/sales/already', params);

  return data;
};

export const ProSimulationInfo = async (params: SimulationParams) => {
  const email = sessionStorage.getItem('email');
  const { data } = await client.get(`getStore/${email}`);

  return data;
};
