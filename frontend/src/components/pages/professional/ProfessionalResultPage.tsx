import React from 'react';
import styled from 'styled-components';
import ProfessionalSideBar from '../../molecules/ProfessionalSideBar/index';
import SalesSimulation from '../simulation/SalesSimulation';
import {
  useProSalesSimulation,
  useProSimulationResult,
} from '../../../hooks/simulation';
import { SimulationParams } from '../../../models/simultaion';
import { useProfessionalResult } from '../../../hooks/professional';
import { ProfessionalResultParams } from '../../../models/professional';

interface ProfessionalResultProps {}

const values = [
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

const professionalResultPage = ({}: ProfessionalResultProps) => {
  return (
    <Wrapper>
      <ProfessionalSideBar></ProfessionalSideBar>
      <Result>
        <SalesSimulation values={values}></SalesSimulation>
      </Result>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Result = styled.div`
  display: flex;
  flex-direction: column;
`;

export default professionalResultPage;
