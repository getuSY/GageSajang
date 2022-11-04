import React, { useRef } from 'react';
import styled from 'styled-components';
import type { ChartData, ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

// 시뮬레이션 페이지에 들어갈 메인 라인 그래프 연습용입니다!!
// 지우지 마세용 ㅠㅠㅠ

interface PracticeLineChartProps {
  options?: ChartOptions<'line'>;
  data: ChartData<'line'>;
  style?: object;
  // onMouseOver?: React.MouseEventHandler;
  // chartRef : React.RefObject<HTMLElement>
}

const PracticeLineChart = ({
  data,
  style,
  options,
}: // onMouseOver,
// chartRef,
PracticeLineChartProps) => {
  const chartRef = useRef();
  // const setTime = () => {
  //   const chart = chartRef.current;
  //   console.log(chart);
  // };
  const chart = chartRef.current;
  console.log(chart);
  return (
    <Wrapper style={style}>
      <Line data={data} options={options} ref={chartRef} />
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
