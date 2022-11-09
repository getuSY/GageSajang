import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReportChart from '../ReportChart';
import { ReportChartProps } from '../ReportChart';
import { SimulInfo } from '../../pages/simulation/SalesSimulation';

interface DynamicTopChartProps {
  posi: number;
  // values: Array<SimulInfo>;
}

const given = [
  { x: 2013, y: 200 },
  { x: 2014, y: 1523 },
  { x: 2015, y: 1324 },
  { x: 2016, y: 11254 },
  { x: 2017, y: 12124 },
  { x: 2018, y: 1564 },
  { x: 2019, y: 1234 },
  { x: 2020, y: 15644 },
  { x: 2021, y: 200 },
  { x: 2022, y: 1564 },
  { x: 2023, y: 17895 },
];

type Position = { x: number; y: number };

const DynamicTopChart = ({ posi }: DynamicTopChartProps) => {
  // const topValues = values;
  // topValues.sort((a, b) => b.value - a.value);

  const [realData, setRealData] = useState([{ x: 2013, y: 0 }]);
  const [realLabel, setRealLabel] = useState([2013]);
  const trackPosi = () => {
    const newPos = posi / 50;
    const newData: Array<Position> = given.slice(0, Number(newPos) + 1);
    // const arr = newData.sort((a: Position, b: Position) => {
    //   if (a.y < b.y) {
    //     return -1;
    //   }
    // });
    newData.sort((a, b) => b.y - a.y);
    let newArr;
    // if (arr.length >= 5) {
    //   newArr = arr;
    // } else {
    //   newArr = arr.slice(0, 6);
    // }
    if (newData.length > 5) {
      newArr = newData.slice(0, 6);
    } else {
      newArr = newData;
    }
    setRealData(newArr);
    let newLabel = newArr.map((a) => a.x);
    console.log('x값만 뽑기', newLabel);
    setRealLabel(newLabel);
    console.log(realData);
    console.log('sorting 비교', newData, newArr);
  };
  const years = [
    2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
  ];
  useEffect(() => {
    trackPosi();
    console.log('top chart posi incoming', posi);
  }, [posi]);
  const data = {
    labels: realLabel,
    datasets: [
      {
        label: '매출액 TOP 5',
        data: realData,
        backgroundColor: '#eeeeee',
        borderColor: 'black',
        borderWidth: 1,
        tension: 0.8,
        // hidden: true,
      },
    ],
  };
  let context;
  const options = {
    resizeDelay: 500,
    animation: {
      // delay: 500,
      easing: 'easeOutQuad',
      // loop: true,
    },
    interaction: {
      mode: 'index',
      axis: 'x',
    },
    reponsive: false,
    // resizeDelay: 0,
    elements: { point: { pointStyle: 'rectRot', radius: 5 } },
    plugins: {
      datalabels: { display: false },
      title: {
        display: true,
        text: '매출액 증감 추이',
      },
      legend: {
        display: true,
        labels: {
          color: 'rgb(255, 99, 132)',
        },
      },
    },
    scales: {
      x: {
        type: 'category',
        axis: 'x',
        // min: 2013,
        // max: realData[realData.length - 1].y,
        title: {
          display: 'true',
          text: '매출 기준 분기',
        },
        grid: {
          display: false,
        },
      },
      y: {
        axis: 'y',
        title: {
          display: 'true',
          text: '매출액(단위 : 원)',
        },
      },
    },
  };
  return (
    <Wrapper>
      <ReportChart
        type="bar"
        data={data}
        options={options}
        style={{ width: '800px', height: 'auto' }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default DynamicTopChart;
