import client from './client';
import { SimulationParams } from '../models/simultaion';

// 서버에 파이썬 올라오기 전까지 임시로 쓸 sales simul data

const proDummyData = [
  {
    year: 2013,
    quarter: 1,
    value: 451,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2013,
    quarter: 2,
    value: 491,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2013,
    quarter: 3,
    value: 496,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2013,
    quarter: 4,
    value: 493,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2014,
    quarter: 1,
    value: 466,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2014,
    quarter: 2,
    value: 511,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2014,
    quarter: 3,
    value: 509,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2014,
    quarter: 4,
    value: 506,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2015,
    quarter: 1,
    value: 351,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2015,
    quarter: 2,
    value: 383,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2015,
    quarter: 3,
    value: 381,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2015,
    quarter: 4,
    value: 380,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2016,
    quarter: 1,
    value: 394,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2016,
    quarter: 2,
    value: 435,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2016,
    quarter: 3,
    value: 427,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2016,
    quarter: 4,
    value: 426,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2017,
    quarter: 1,
    value: 428,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2017,
    quarter: 2,
    value: 420,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2017,
    quarter: 3,
    value: 397,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2017,
    quarter: 4,
    value: 408,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2018,
    quarter: 1,
    value: 406,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2018,
    quarter: 2,
    value: 358,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2018,
    quarter: 3,
    value: 351,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2018,
    quarter: 4,
    value: 355,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2019,
    quarter: 1,
    value: 330,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2019,
    quarter: 2,
    value: 323,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2019,
    quarter: 3,
    value: 328,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2019,
    quarter: 4,
    value: 278,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2020,
    quarter: 1,
    value: 273,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2020,
    quarter: 2,
    value: 279,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2020,
    quarter: 3,
    value: 283,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2020,
    quarter: 4,
    value: 291,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2021,
    quarter: 1,
    value: 277,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2021,
    quarter: 2,
    value: 275,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2021,
    quarter: 3,
    value: 285,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2021,
    quarter: 4,
    value: 290,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2022,
    quarter: 1,
    value: 374,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2022,
    quarter: 2,
    value: 368,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2022,
    quarter: 3,
    value: 376,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2022,
    quarter: 4,
    value: 377,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2023,
    quarter: 1,
    value: 478,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2023,
    quarter: 2,
    value: 467,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2023,
    quarter: 3,
    value: 473,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2023,
    quarter: 4,
    value: 479,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
];

export const ProSimulationResult = async (params: SimulationParams) =>
  proDummyData;

const amaDummyData = [
  {
    year: 2022,
    quarter: 4,
    value: 63430330,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2022,
    quarter: 1,
    value: 65058084,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2022,
    quarter: 2,
    value: 81318825,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2022,
    quarter: 3,
    value: 80213764,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2022,
    quarter: 0,
    value: 83230328,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
];

export const AmaSimulationResult = async (params: SimulationParams) =>
  amaDummyData;

// 아래가 실사용

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
