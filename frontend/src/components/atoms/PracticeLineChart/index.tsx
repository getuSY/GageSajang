import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import type { ChartData, ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

// 시뮬레이션 페이지에 들어갈 메인 라인 그래프 연습용입니다!!
// 지우지 마세용 ㅠㅠㅠ

interface PracticeLineChartProps {
  options?: ChartOptions<'line'>;
  // data: ChartData<'line'>;
  style?: object;
  // onMouseOver?: React.MouseEventHandler;
  // chartRef : React.RefObject<HTMLElement>
  onClick?: React.MouseEventHandler;
}

let raw = [19, 3, 5, 2, 3];

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      //   label:
      data: raw,
      backgroundColor: [
        'rgba(54, 162, 235, 1)',
        // 'rgba(255, 206, 86, 1)',
        // 'rgba(75, 192, 192, 0.2)',
        // 'rgba(153, 102, 255, 0.2)',
        // 'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        // 'rgba(54, 162, 235, 1)',
        // 'rgba(255, 206, 86, 1)',
        // 'rgba(75, 192, 192, 1)',
        // 'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const PracticeLineChart = ({
  // data,
  style,
  options,
  onClick,
}: // onMouseOver,
// chartRef,
PracticeLineChartProps) => {
  const chartRef = useRef();
  useEffect(() => {
    console.log(chart);
  }, [data]);
  // const setTime = () => {
  //   const chart = chartRef.current;
  //   console.log(chart);
  // };
  const chart = chartRef.current;
  const addRaw = () => {
    raw.push(2);
  };
  console.log(chart);
  return (
    <Wrapper style={style}>
      <Line data={data} options={options} ref={chartRef} onClick={addRaw} />
      <Circle />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: red;
`;

export default PracticeLineChart;
