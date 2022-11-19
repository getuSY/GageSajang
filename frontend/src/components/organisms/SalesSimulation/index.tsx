import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RoundBox from '../../atoms/RoundBox';
import Button from '../../atoms/Button';
import SlideBar from '../../atoms/SlideBar';
import DynamicRateChart from '../../atoms/DynamicRateChart';
import DynamicTopChart from '../../atoms/DynamicTopChart';
import DynamicFlowChart from '../../atoms/DynamicFlowChart';

interface SalesSimulationProps {
  values: Array<SimulInfo>;
  name: string;
}

export type SimulInfo = {
  year: number;
  quarter: number;
  value: number;
  dongName: string;
  industryName: string;
};

const SalesSimulation = ({ values, name }: SalesSimulationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pos, setPos] = useState(0);
  const [yearLabel, setYearLabel] = useState<Array<string>>(['2013년 1분기']);
  const [salesValues, setSalesValues] = useState<Array<number>>([0]);
  const [topValues, setTopValues] = useState<Array<number>>([0]);
  const [topLabel, setTopLabel] = useState<Array<string>>(['2013년 1분기']);
  const [rateValue, setRateValue] = useState<Array<number>>([0]);
  const [btmValues, setBtmValues] = useState<Array<number>>([0]);
  const [btmLabel, setBtmLabel] = useState<Array<string>>(['2013년 1분기']);
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
      .map((a) => a.value / 10000);
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
    const topVals: Array<number> = newTops.map((a) => a.value / 10000);
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
    const btmVals: Array<number> = newBtms.map((a) => a.value / 10000);
    setBtmValues(btmVals);
    setBtmLabel(btmQuarters);
    // rate chart 넘겨줄 데이터
    const rates: Array<number> = sales.map((val, idx) => {
      if (idx > 0) {
        if ((100 * val) / sales[idx - 1] !== 100) {
          return (100 * val) / sales[idx - 1] - 100;
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
    <Wrapper isOpen={isOpen}>
      <TitleDiv>
        <div className="title">
          💰 {name} 시뮬레이션 결과를 확인할 수 있습니다.
        </div>
        <img
          src={`/assets/icons/greenblue_${isOpen ? 'up' : 'down'}_btn.png`}
          alt="exit"
          width="50px"
          height="50px"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        />
      </TitleDiv>

      <>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <SlideBar setPos={setPos} />
        </div>

        <ChartBox>
          <Inside>
            {' '}
            <DynamicFlowChart
              values={salesValues}
              labels={yearLabel}
              name={name}
            />
            <DynamicRateChart
              values={rateValue}
              labels={yearLabel}
              name={name}
            />
          </Inside>
          <Inside>
            <DynamicTopChart
              title={name + 'TOP 5'}
              values={topValues}
              labels={topLabel}
              colors={topColor}
              name={name}
            ></DynamicTopChart>
            <DynamicTopChart
              title={name + 'BOTTOM 5'}
              values={btmValues}
              labels={btmLabel}
              colors={btmColor}
              name={name}
            ></DynamicTopChart>
          </Inside>
        </ChartBox>
      </>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isOpen: boolean }>`
  background: #ffffff;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  display: flex;
  padding: 14px 20px;
  /* height: 48px; */
  height: ${({ isOpen }) => (isOpen ? '1000px' : '48px')};
  transition: 1.5s;
  flex-shrink: 0;
  overflow: hidden;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 48px;
  & .title {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
  }
  margin-bottom: 14px;
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

  width: '100%',
  // height: '800px',
  boxShadow: '0 7px 25px rgba(0, 0, 0, 0.1)',
};

const ChartBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Inside = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export default SalesSimulation;
