import React from 'react';
import styled from 'styled-components';
import type { ChartData, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

interface BarChartProps {
  //   options: ChartOptions<'line'>;
  data: ChartData<'bar'>;
}

const BarChart = ({ data }: BarChartProps) => {
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

export default BarChart;
