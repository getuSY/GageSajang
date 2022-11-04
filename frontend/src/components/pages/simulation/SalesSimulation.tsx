import React, { useState } from 'react';
import styled from 'styled-components';
import RoundBox from '../../atoms/RoundBox/index';
import Button from '../../atoms/Button/index';
import LineChart from '../../atoms/LineChart/index';

// 시뮬레이션 페이지 안에 들어갈 시뮬레이션 그래프 컴포넌트입니다.
// 임시로 시뮬레이션 pages 안에 만들어둠!!
// 나중에 그래프 하나씩 채워넣고 나서 제자리에 이사시켜줄 예정!!

interface SalesSimulationProps {}

const SalesSimulation = ({}: SalesSimulationProps) => {
  let [open, setOpen] = useState(false);
  const showGraph = () => {
    setOpen(true);
  };
  const hideGraph = () => {
    setOpen(false);
  };
  return (
    <Wrapper>
      {open === true && (
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
              onClick={hideGraph}
            />
          </TitleDiv>
          <LineChart data={graphData} style={graphStyle} />
        </RoundBox>
      )}
      {open === false && (
        <RoundBox style={{ width: '1200px', height: '80px' }}>
          <TitleDiv
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            접혀 있는 그래프 컴포넌트입니다
            <OpenBtn onClick={showGraph}></OpenBtn>
          </TitleDiv>
        </RoundBox>
      )}
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

const OpenBtn = styled.div`
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
`;

export default SalesSimulation;
