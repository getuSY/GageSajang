import client from './client';
import {
  FloadtingPopulationMap,
  ResidentPopulationMap,
  NumberOfStoresMap,
  OpeningRateMap,
  ClosureRateMap,
  SalesMap,
} from '../models/status';

export const getFloadtingPopulationMap = async (
  params: FloadtingPopulationMap
) => {
  const { data } = await client.get(`user/hello?name=${name}`);

  return data;
};
