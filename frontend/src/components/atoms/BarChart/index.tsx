import React from 'react';
import styled from 'styled-components';
import type { ChartData, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';

interface BarChartProps {
  options?: ChartOptions<'bar'>;
  data: ChartData<'bar'>;
  style?: object;
}

const BarChart = ({ data, options, style }: BarChartProps) => {
  return (
    <Wrapper style={style}>
      <Bar data={data} options={options} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default BarChart;
