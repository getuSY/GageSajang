import React from 'react';
import styled from 'styled-components';
import type { ChartData, ChartOptions } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

interface PolarAreaChartProps {
  //   options: ChartOptions<'line'>;
  data: ChartData<'polarArea'>;
}

const PolarAreaChart = ({ data }: PolarAreaChartProps) => {
  return (
    <Wrapper>
      <PolarArea data={data} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
`;

export default PolarAreaChart;
