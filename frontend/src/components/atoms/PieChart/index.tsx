import React from 'react';
import styled from 'styled-components';
import type { ChartData, ChartOptions } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

interface PieChartProps {
  //   options: ChartOptions<'line'>;
  data: ChartData<'pie'>;
}

const PieChart = ({ data }: PieChartProps) => {
  return (
    <Wrapper>
      <Pie data={data} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
`;

export default PieChart;
