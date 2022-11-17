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
  // if (name === '매출') {
  //   const mutation =
  // } else if (name === '생활인구') {
  //   const mutation =
  // } else if (name === '거주인구') {

  // } else if (name === '직장인구') {

  // } else if (name === '매출 건수'){}
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
    <Wrapper>
      {open === true && (
        <RoundBox style={roundStyle}>
          <TitleDiv>
            <Button
              type="main"
              style={{ width: '300px', height: '65px', fontSize: '24px' }}
            >
              {name} 시뮬레이션 결과
            </Button>
            <TitleMsg>
              아래 바를 움직여 시뮬레이션 결과를 확인하세요. 모든 시뮬레이션
              결과는 입력하신 가게 정보를 바탕으로 예측된 값이니 이용에 참고
              바랍니다.
            </TitleMsg>
            <img
              src="/assets/icons/greenblue_up_btn.png"
              alt="exit"
              width="50px"
              height="50px"
              onClick={hideGraph}
              style={{ marginTop: '10px' }}
            />
          </TitleDiv>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <SlideBar setPos={setPos} />
          </div>

          <ChartBox></ChartBox>

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
              <ExBox>
                <span>
                  3개월 후 {name} 예측 : 약 {values[40].value}{' '}
                </span>
                <br></br>
                <span>
                  6개월 후 {name} 예측 : 약 {values[41].value}
                </span>
                <br></br>
                <span>
                  6개월 후 {name} 예측 : 약 {values[42].value}
                </span>
                <br></br>
                <span>
                  1년 후 {name} 예측 : 약 {values[43].value}
                </span>
              </ExBox>
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
              <ExBox>
                <span>{name} 상위 5분기 : </span>
                <br></br>
                <span>{name} 하위 5분기 : </span>
                <br></br>
                <span>
                  {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-tag" /> */}
                  tip : {name} 상위 및 하위에 특정 분기가 자주 보인다면,{' '}
                  <br></br>
                  해당 분기 서비스를 재고해보시면 어떨까요?
                </span>
              </ExBox>
            </Inside>
          </ChartBox>
        </RoundBox>
      )}
      {open === false && (
        <RoundBox
          style={{
            width: 'calc(100% - 60px)',
            height: '80px',
            margin: '30px',
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
            💰 {name} 시뮬레이션 결과를 확인할 수 있습니다.
            <img
              src="/assets/icons/greenblue_down_btn.png"
              alt="exit"
              width="50px"
              height="50px"
              onClick={showGraph}
              style={{ alignSelf: 'center', marginTop: '-50px' }}
            />
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

  width: 'calc(100% - 60px)',
  margin: '30px',
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

const ExBox = styled.div`
  width: 80%;
  border-left: solid 10px ${({ theme }) => theme.lightColor};
  background: #ffffe0b9;
  padding: 30px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly;
  align-items: flex-start; */
`;

export default SalesSimulation;
