import React from 'react';
import styled from 'styled-components';
import type { ChartData, ChartOptions } from 'chart.js';
import {
  Bar,
  Bubble,
  Doughnut,
  Line,
  Pie,
  PolarArea,
  Radar,
} from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  registerables,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(
  ChartDataLabels,
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ...registerables
);

interface ReportChartProps {
  type: 'bar' | 'bubble' | 'doughnut' | 'line' | 'pie' | 'polarArea' | 'radar';
  options?: any;
  data: any;
  style?: object;
  chartRef?: any;
}

const ReportChart = ({
  type,
  data,
  options,
  style,
  chartRef,
}: ReportChartProps) => {
  return (
    <Wrapper style={style}>
      {type === 'bar' && <Bar data={data} options={options} ref={chartRef} />}
      {type === 'bubble' && <Bubble data={data} options={options} />}
      {type === 'doughnut' && <Doughnut data={data} options={options} />}
      {type === 'line' && <Line data={data} options={options} />}
      {type === 'pie' && <Pie data={data} options={options} />}
      {type === 'polarArea' && <PolarArea data={data} options={options} />}
      {type === 'radar' && <Radar data={data} options={options} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
`;

export default ReportChart;
