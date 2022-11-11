import React from 'react';
import styled from 'styled-components';
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

export interface ReportChartProps {
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
  const chartOptions = {
    ...options,
    maintainAspectRatio: false,
  };
  return (
    <Wrapper style={style}>
      {type === 'bar' && (
        <Bar data={data} options={chartOptions} ref={chartRef} />
      )}
      {type === 'bubble' && <Bubble data={data} options={chartOptions} />}
      {type === 'doughnut' && <Doughnut data={data} options={chartOptions} />}
      {type === 'line' && <Line data={data} options={chartOptions} />}
      {type === 'pie' && <Pie data={data} options={chartOptions} />}
      {type === 'polarArea' && <PolarArea data={data} options={chartOptions} />}
      {type === 'radar' && <Radar data={data} options={chartOptions} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  height: 300px;
`;

export default ReportChart;
