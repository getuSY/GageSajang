import client from './client';
import {
  FloatingPopulationMap,
  ResidentPopulationMap,
  NumberOfStoresMap,
  OpeningRateMap,
  ClosureRateMap,
  SalesMap,
} from '../models/status';

export const getFloadtingPopulationMap = async (
  params: FloatingPopulationMap
) => {
  const { data } = await client.get(`user/hello?name=${name}`);

  return data;
};
