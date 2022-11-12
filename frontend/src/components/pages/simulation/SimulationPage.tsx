import React from 'react';
import styled from 'styled-components';
import SalesSimulation from './SalesSimulation';

const values = [
  {
    year: 2013,
    quarter: 1,
    value: 53471436,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2013,
    quarter: 2,
    value: 56827529,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2013,
    quarter: 3,
    value: 53974196,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2013,
    quarter: 4,
    value: 56068101,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2014,
    quarter: 1,
    value: 56198368,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2014,
    quarter: 2,
    value: 59522619,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2014,
    quarter: 3,
    value: 56645538,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2014,
    quarter: 4,
    value: 58797010,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2015,
    quarter: 1,
    value: 44054566,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2015,
    quarter: 2,
    value: 45817652,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2015,
    quarter: 3,
    value: 44691487,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2015,
    quarter: 4,
    value: 46477482,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2016,
    quarter: 1,
    value: 48019351,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2016,
    quarter: 2,
    value: 49722267,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2016,
    quarter: 3,
    value: 48584875,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2016,
    quarter: 4,
    value: 50498264,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2017,
    quarter: 1,
    value: 47752113,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2017,
    quarter: 2,
    value: 50474363,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2017,
    quarter: 3,
    value: 49878688,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2017,
    quarter: 4,
    value: 48007407,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2018,
    quarter: 1,
    value: 43753800,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2018,
    quarter: 2,
    value: 49758876,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2018,
    quarter: 3,
    value: 44889386,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2018,
    quarter: 4,
    value: 46840316,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2019,
    quarter: 1,
    value: 45754916,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2019,
    quarter: 2,
    value: 54295263,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2019,
    quarter: 3,
    value: 55481501,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2019,
    quarter: 4,
    value: 51541796,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2020,
    quarter: 1,
    value: 46648502,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2020,
    quarter: 2,
    value: 48049542,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2020,
    quarter: 3,
    value: 48151582,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2020,
    quarter: 4,
    value: 46221775,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2021,
    quarter: 1,
    value: 38375197,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2021,
    quarter: 2,
    value: 48108637,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2021,
    quarter: 3,
    value: 46633496,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2021,
    quarter: 4,
    value: 48463198,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2022,
    quarter: 1,
    value: 48794482,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2022,
    quarter: 2,
    value: 61268662,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2022,
    quarter: 3,
    value: 59704997,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2022,
    quarter: 4,
    value: 60000330,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2023,
    quarter: 1,
    value: 65273089,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2023,
    quarter: 2,
    value: 81314495,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2023,
    quarter: 3,
    value: 79634885,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
  {
    year: 2023,
    quarter: 4,
    value: 82338601,
    dongName: '개포2동',
    industryName: '한식음식점',
  },
];

const SimulationPage = () => {
  return (
    <Wrapper>
      {/* <TempSide></TempSide> */}
      <h1>SimulationPage</h1>
      <SalesSimulation values={values}></SalesSimulation>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  width: 100%;
`;

const TempSide = styled.div`
  background-color: green;
  width: 500px;
  height: 100%;
`;

const DataBox = styled.div``;

export default SimulationPage;
