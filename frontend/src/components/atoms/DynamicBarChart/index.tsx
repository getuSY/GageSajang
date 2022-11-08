import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import type { ChartData, ChartOptions, Chart } from 'chart.js';
import { Bar } from 'react-chartjs-2';

interface BarChartProps {
  // options?: ChartOptions<'line'>;
  data?: ChartData<'bar'>;
}

interface DynamicBarChartProps extends BarChartProps {
  posi: number;
}

const given = [
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

type Position = { x: number; y: number };

const DynamicBarChart = ({ posi }: DynamicBarChartProps) => {
  const [realData, setRealData] = useState([{ x: 2013, y: 0 }]);
  const trackPosi = () => {
    const newPos = posi / 50;
    const newData: Array<Position> = given.slice(0, Number(newPos) + 1);
    setRealData(newData);
    console.log(realData);
  };
  const years = [
    2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
  ];
  const data = {
    title: '매출액 증감 추이',
    labels: years,
    datasets: [
      {
        labels: years,
        data: realData,
        backgroundColor: '#eeeeee',
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    trackPosi();
    console.log('매출 증감 비율 확인', realData);
  }, [posi]);
  return (
    <Wrapper>
      <Bar data={data} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
`;

export default DynamicBarChart;
