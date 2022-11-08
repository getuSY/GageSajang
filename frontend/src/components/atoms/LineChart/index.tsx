import styled from 'styled-components';
import type { ChartData, ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js';
Chart.register(ChartDataLabels);

interface LineChartProps {
  options?: ChartOptions<'line'>;
  data: ChartData<'line'>;
  style?: object;
}

const LineChart = ({ data, style, options }: LineChartProps) => {
  return (
    <Wrapper style={style}>
      <Line data={data} options={options} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
`;

export default LineChart;
