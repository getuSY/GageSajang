import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RoundBox from '../../atoms/RoundBox';
import Button from '../../atoms/Button';
import DynamicChart from '../../atoms/DynamicChart';
import SlideBar from '../../atoms/SlideBar';
import DynamicRateChart from '../../atoms/DynamicRateChart';
import ReportChart from '../../atoms/ReportChart';
import DynamicTopChartProps from '../../atoms/DynamicTopChart';

// 시뮬레이션 페이지 안에 들어갈 시뮬레이션 그래프 컴포넌트입니다.
// 임시로 시뮬레이션 pages 안에 만들어둠!!
// 나중에 그래프 하나씩 채워넣고 나서 제자리에 이사시켜줄 예정!!

interface SalesSimulationProps {
  values: Array<SimulInfo>;
}

export type SimulInfo = {
  year: number;
  quarter: number;
  value: number;
  dongName: string;
  industryName: string;
};

const SalesSimulation = ({ values }: SalesSimulationProps) => {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState(0);
  const [data, setData] = useState([
    {
      year: 2013,
      quarter: 1,
      value: 0,
      dongName: '',
      industryName: '',
    },
  ]);
  const [yearLabel, setYearLabel] = useState(['2013년 1분기']);
  const [salesValues, setSalesValues] = useState([0]);
  const showGraph = () => {
    setOpen(true);
  };
  const hideGraph = () => {
    setOpen(false);
  };
  useEffect(() => {
    let perPos = pos / 50;
    let newData: Array<SimulInfo> = values.slice(0, (Number(perPos) + 1) * 4);
    setData(newData);
    const quarters: Array<string> = data.map((a) => {
      const yr = a.year;
      const quart = a.quarter;
      return yr + '년 ' + quart + '분기';
    });
    const sales: Array<number> = data.map((a) => a.value);
    setYearLabel(quarters);
    setSalesValues(sales);
    console.log('simulpage', yearLabel);
    console.log('simulpage', salesValues);
  }, [pos]);
  console.log('바깥 값 체크', yearLabel, salesValues);

  // useEffect(() => {
  //   let perPos = pos / 50;
  //   let newData: Array<SimulInfo> = values.slice(0, (Number(perPos) + 1) * 4);
  //   setData(newData);
  //   const yearLabel: Array<string> = data.map((a) => {
  //     const val = a.value;
  //     // return ;
  //   });
  //   const salesValues = data.map((a) => a.value);
  //   console.log(yearLabel);
  //   console.log(salesValues);
  // }, [pos]);

  // api통해 매출 예측값 받아오기
  // data 설정한 후 props로 차트들에 data로 내려주기

  // type Position = { x: number; y: number };
  // let rate: Array<Position> = [0];
  // let i: number = 1;
  // while (i <= 11) {
  //   const newY: number = (given[i].x - given[i - 1].x) / given[i - 1].x;
  //   rate.push(newY*100);
  //   i += 1;
  // }

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
          {/* <LineChart data={graphData} style={graphStyle} /> */}

          <SlideBar setPos={setPos} />
          <DynamicTopChartProps posi={pos} />
          <DynamicChart posi={pos} />
          <DynamicRateChart
            posi={pos}
            values={salesValues}
            labels={yearLabel}
          />

          {/* <ReportChart posi={pos} /> */}
          {/* <ReportChart type="line" data={graphData} style={graphStyle} /> */}
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
  position: relative;
  width: 100%;
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
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignitems: 'center',
  width: '100%',
  // height: '800px',
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
