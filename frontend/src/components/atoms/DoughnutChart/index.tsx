import React from 'react';
import styled from 'styled-components';
import type { ChartData, ChartOptions } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

interface DoughnutChartProps {
  //   options: ChartOptions<'line'>;
  data: ChartData<'doughnut'>;
}

const DoughnutChart = ({ data }: DoughnutChartProps) => {
  return (
    <Wrapper>
      <Doughnut data={data} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
`;

export default DoughnutChart;
