import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RoundBox from '../../atoms/RoundBox';
import Button from '../../atoms/Button';
import SlideBar from '../../atoms/SlideBar';
import DynamicRateChart from '../../atoms/DynamicRateChart';
import DynamicTopChart from '../../atoms/DynamicTopChart';
import DynamicFlowChart from '../../atoms/DynamicFlowChart';
import { genderGrad } from '../../../hooks/amatuer';

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
  const [yearLabel, setYearLabel] = useState<Array<string>>(['2013년 1분기']);
  const [salesValues, setSalesValues] = useState<Array<number>>([0]);
  const [topValues, setTopValues] = useState<Array<number>>([0]);
  const [topLabel, setTopLabel] = useState<Array<string>>(['2013년 1분기']);
  const [rateValue, setRateValue] = useState<Array<number>>([0]);
  const [btmValues, setBtmValues] = useState<Array<number>>([0]);
  const [btmLabel, setBtmLabel] = useState<Array<string>>(['2013년 1분기']);
  const showGraph = () => {
    setOpen(true);
  };
  const hideGraph = () => {
    setOpen(false);
  };

  useEffect(() => {
    let perPos = pos / 50;
    // flow Chart 넘겨줄 데이터
    const quarters: Array<string> = values
      .slice(0, (Number(perPos) + 1) * 4)
      .map((a) => {
        const yr = a.year;
        const quart = a.quarter;
        return yr + '년 ' + quart + '분기';
      });
    const sales: Array<number> = values
      .slice(0, (Number(perPos) + 1) * 4)
      .map((a) => a.value);
    setYearLabel(quarters);
    setSalesValues(sales);
    // top chart 넘겨줄 데이터
    const tops: Array<SimulInfo> = values.slice(0, (Number(perPos) + 1) * 4);
    let newTops;
    if (tops.length > 6) {
      newTops = tops.sort((a, b) => b.value - a.value).slice(0, 5);
    } else {
      newTops = tops.sort((a, b) => b.value - a.value);
    }
    const topQuarters: Array<string> = newTops.map((a) => {
      const yr = a.year;
      const quart = a.quarter;
      return yr + '년 ' + quart + '분기';
    });
    const topVals: Array<number> = newTops.map((a) => a.value);
    setTopValues(topVals);
    setTopLabel(topQuarters);
    // bottom 차트 넘겨줄 데이터
    const bottms: Array<SimulInfo> = values.slice(0, (Number(perPos) + 1) * 4);
    let newBtms;
    if (bottms.length > 6) {
      newBtms = tops.sort((a, b) => a.value - b.value).slice(0, 5);
    } else {
      newBtms = tops.sort((a, b) => a.value - b.value);
    }
    const btmQuarters: Array<string> = newBtms.map((a) => {
      const yr = a.year;
      const quart = a.quarter;
      return yr + '년 ' + quart + '분기';
    });
    const btmVals: Array<number> = newBtms.map((a) => a.value);
    setBtmValues(btmVals);
    setBtmLabel(btmQuarters);
    // rate chart 넘겨줄 데이터
    const rates: Array<number> = sales.map((val, idx) => {
      if (idx > 0) {
        if ((100 * sales[idx - 1]) / val !== 100) {
          return (100 * sales[idx - 1]) / val - 100;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    });
    setRateValue(rates);
  }, [pos]);
  const btmColor = [
    [0, '#B6ACF1'],
    [1, '#27CFFB'],
  ];
  const topColor = [
    [0, '#F3B79B'],
    [1, '#F872D4'],
  ];

  return (
    <Wrapper>
      {open === true && (
        <RoundBox style={roundStyle}>
          <TitleDiv>
            <Button
              type="main"
              style={{ width: '300px', height: '65px', fontSize: '24px' }}
            >
              매출 시뮬레이션 결과
            </Button>
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
          <SlideBar setPos={setPos} />
          <ChartBox>
            <DynamicFlowChart values={salesValues} labels={yearLabel} />
            <DynamicRateChart values={rateValue} labels={yearLabel} />
          </ChartBox>
          <ExBox>
            <span>3개월 후 매출 : </span>
            <br></br>
            <span>6개월 후 매출 : </span>
            <br></br>
            <span>9개월 후 매출 : </span>
            <br></br>
            <span>1년 후 매출 : </span>
            <br></br>
          </ExBox>
          <ChartBox>
            <DynamicTopChart
              title="매출액 TOP 5"
              values={topValues}
              labels={topLabel}
              colors={topColor}
            ></DynamicTopChart>
            <DynamicTopChart
              title="매출액 5"
              values={btmValues}
              labels={btmLabel}
              colors={btmColor}
            ></DynamicTopChart>
          </ChartBox>
          <ExBox>매출 top 5분기, 매출 바닥 5분기</ExBox>
        </RoundBox>
      )}
      {open === false && (
        <RoundBox
          style={{
            width: 'calc(100% - 40px)',
            height: '80px',
            margin: '20px',
            boxShadow: '0 7px 25px rgba(0, 0, 0, 0.1)',
            borderRadius: '20px',
          }}
        >
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
  /* position: relative; */
  /* width: 100%; */
  display: flex;
  flex-direction: column;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem;
  z-index: 1;
  gap: 2rem;
  height: 65px;
`;

const TitleMsg = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightyellow;
  border-radius: 20px;
`;

const roundStyle = {
  // position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignitems: 'center',
  width: 'calc(100% - 40px)',
  margin: '20px',
  // height: '800px',
  'box-shadow': '0 7px 25px rgba(0, 0, 0, 0.1)',
};

const OpenBtn = styled.div`
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
`;

const ChartBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const ExBox = styled.div`
  border-left: solid 5px green;
  background: lightyellow;
  padding: 30px;
  margin: 2rem 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export default SalesSimulation;
