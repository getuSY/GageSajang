import React from 'react';
import styled from 'styled-components';
import type { ChartData } from 'chart.js';
import ReportChart from '../../atoms/ReportChart';
import ReportSubtitle from '../../atoms/ReportSubtitle';

interface StatusReportBarChartProps {
  title: string;
  data: ChartData<'bar'>;
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
    <Wrapper>
      <ReportSubtitle title={title} style={{ marginBottom: '1rem' }} />
      <ReportChart type="bar" data={data} options={options} style={style} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default StatusReportBarChart;
