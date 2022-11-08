import React from 'react';
import styled from 'styled-components';
import type { ChartData, ChartOptions } from 'chart.js';
import BarChart from '../../atoms/BarChart';
import ReportSubtitle from '../../atoms/ReportSubtitle';
import ChartDataLabels from 'chartjs-plugin-datalabels';

interface StatusReportBarChartProps {
  title: string;
  data: ChartData<'bar'>;
  // options: ChartOptions<'bar'>;
  options: any;
  style?: object;
}
const StatusReportBarChart = ({
  title,
  data,
  options,
  style,
}: StatusReportBarChartProps) => {
  return (
    <Wrapper style={style}>
      <ReportSubtitle
        title={title}
        style={{ marginBottom: '1rem' }}
      ></ReportSubtitle>
      <BarChart data={data} options={options} style={{ width: '450px' }} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default StatusReportBarChart;
