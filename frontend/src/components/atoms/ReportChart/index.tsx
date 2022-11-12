import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Chart } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Chart as ChartJS,
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
import createGradient from '../../../utils/createGradient';

ChartJS.register(
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
  grad?: any;
  canvasStyle?: object;
}

const ReportChart = ({
  type,
  data,
  options,
  style,
  grad,
  canvasStyle,
}: ReportChartProps) => {
  const chartOptions = {
    ...options,
    maintainAspectRatio: false,
  };

  const [chartData, setChartData] = useState<any>(data);
  const chartRef = useRef<ChartJS>(null);
  useEffect(() => {
    if (!chartRef) return;
    const chart = chartRef.current;
    if (!chart || !data || !grad) {
      return;
    }
    const newChartData = {
      ...chartData,
      datasets: [
        {
          ...chartData.datasets[0],
          backgroundColor: createGradient(chart.ctx, chart.chartArea, grad),
        },
      ],
    };
    setChartData(newChartData);
  }, []);
  return (
    <Wrapper style={style}>
      <Chart
        data={chartData}
        type={type}
        options={chartOptions}
        ref={chartRef}
        style={canvasStyle}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  height: 300px;
`;

export default ReportChart;
