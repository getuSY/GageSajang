import React from 'react';
import styled from 'styled-components';
import RoundBox from '../../atoms/RoundBox/index';
import Button from '../../atoms/Button/index';
import LineChart from '../../atoms/LineChart/index';

interface SalesSimulationProps {}

const SalesSimulation = ({}: SalesSimulationProps) => {
  return (
    <Wrapper>
      <RoundBox style={roundStyle}>
        <TitleDiv>
          <Button type="main">3개월 후 예측</Button>
          <TitleMsg>
            시뮬레이션 결과 : 3개월 후 2023년 2분기 매출 예측 결과는
            2145만원입니다.
          </TitleMsg>
          <img
            src="/assets/icons/quit.png"
            alt="exit"
            width="20px"
            height="20px"
            color="green"
          />
        </TitleDiv>
        <LineChart data={graphData} style={graphStyle} />
      </RoundBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  margin: 2rem;
  z-index: 1;
  gap: 3rem;
`;

const TitleMsg = styled.div`
  width: 700px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightyellow;
  border-radius: 30px;
`;

const roundStyle = {
  display: 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  width: '1200px',
  height: '800px',
};

const ChartDiv = styled.div`
  background-color: #e6e6e6;
  width: 1000px;
  height: 500px;
`;

const graphData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      //   label:
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'green',
        '#80b6f4',
        '#f49080',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'green',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const graphStyle = {
  width: '1000px',
  height: '500px',
};

export default SalesSimulation;
