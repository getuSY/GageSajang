import React from 'react';
import styled from 'styled-components';
import type { ChartData, ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

interface LineChartProps {
  //   options: ChartOptions<'line'>;
  data: ChartData<'line'>;
}

const LineChart = ({ data }: LineChartProps) => {
  return (
    <Wrapper>
      <Line data={data} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
`;

export default LineChart;
