import React from 'react';
import styled from 'styled-components';
import type { ChartData, ChartOptions } from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

interface BubbleChartProps {
  //   options: ChartOptions<'line'>;
  data: ChartData<'bubble'>;
}

const BubbleChart = ({ data }: BubbleChartProps) => {
  return (
    <Wrapper>
      <Bubble data={data} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
`;

export default BubbleChart;
