import React from 'react';
import styled from 'styled-components';
import type { ChartData, ChartOptions } from 'chart.js';
import BarChart from '../../atoms/BarChart';
import ReportSubtitle from '../../atoms/ReportSubtitle';

interface StatusReportBarChartProps {
  title: string;
  data: any;
  options: ChartOptions<'bar'>;
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
      <BarChart
        data={data}
        options={options}
        style={{ width: '450px', height: '10px' }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default StatusReportBarChart;
