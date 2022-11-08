import { setUseProxies } from 'immer';
import { number } from 'prop-types';
import React, {
  ChangeEvent,
  ForwardedRef,
  LegacyRef,
  useRef,
  useEffect,
  useState,
} from 'react';
import { Chart } from 'react-chartjs-2';
import styled from 'styled-components';
import CanvasJSReact from '../../../canvasjs.react';
// var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

interface DynamicChartProps {
  options?: object;
  posi: number;
}

const datas = [
  { x: 2013, y: 1000 },
  { x: 2014, y: 1120 },
  { x: 2015, y: 1234 },
  { x: 2016, y: 1234 },
  { x: 2017, y: 1244 },
  { x: 2018, y: 1564 },
  { x: 2019, y: 1234 },
  { x: 2020, y: 1234 },
  { x: 2021, y: 1200 },
  { x: 2022, y: 1564 },
  { x: 2023, y: 1789 },
];
type DynamicData = { x: number; y: number };

const DynamicChart = ({ posi, options }: DynamicChartProps) => {
  const [realData, setRealData] = useState(datas.slice(0, 1));
  useEffect(() => {
    trckPos();
    // console.log('차트 내부 posi 인식', posi);
  }, [posi]);
  const trckPos = () => {
    const newPos = posi / 50;
    const newData = datas.slice(0, Number(newPos) + 1);
    setRealData(newData);
    console.log(realData);
  };
  const chartOptions = {
    title: {
      text: '매출액 예측',
    },
    data: [
      {
        type: 'line',
        dataPoints: realData,
      },
    ],
  };
  return (
    <Wrapper>
      <CanvasJSChart
        options={chartOptions}
        containerProps={{ width: '100%', height: '300px' }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 800px;
  height: 800px;
`;

const Btn = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: blue;
`;

export default DynamicChart;
