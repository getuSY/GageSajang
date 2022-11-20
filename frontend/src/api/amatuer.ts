import { client, client1 } from './client';
import {
  AmatuerResultParams,
  AmatuerSimulationParams,
} from '../models/amatuer';

export const getAmatuerResult = async (params: AmatuerResultParams) => {
  const { admCd, jobCode } = params;
  const { data } = await client.get(`/anlz/dongCS/${admCd}/${jobCode}`);

  return data;
};

export const amatuerSales = async (params: AmatuerSimulationParams) => {
  const { dongName, industryName } = params;
  const { data } = await client1.get(
    `simul/sales/maybe/${dongName.split(' ')[1]}/${industryName}`
  );
  console.log(dongName.split(' ')[1], data);

  return data;
};

export const amatuerLife = async (params: AmatuerSimulationParams) => {
  const { dongName, industryName } = params;
  const { data } = await client1.get(
    `simul/life/maybe/${dongName}/${industryName}`
  );

  return data;
};

export const amatuerResident = async (params: AmatuerSimulationParams) => {
  const { dongName, industryName } = params;
  const { data } = await client1.get(
    `simul/resident/maybe/${dongName}/${industryName}`
  );

  return data;
};

export const amatuerJob = async (params: AmatuerSimulationParams) => {
  const { dongName, industryName } = params;
  const { data } = await client1.get(
    `simul/job/maybe/${dongName}/${industryName}`
  );

  return data;
};

export const amatuerCount = async (params: AmatuerSimulationParams) => {
  const { dongName, industryName } = params;
  const { data } = await client1.get(
    `simul/count/maybe/${dongName}/${industryName}`
  );

  return data;
};
