import React from 'react';
import styled from 'styled-components';
import type { ChartData } from 'chart.js';
import ReportSubtitle from '../../atoms/ReportSubtitle';
import ReportChart from '../../atoms/ReportChart';

interface StatusReportDnChartProps {
  title: string;
  data: ChartData<'doughnut'>;
  options: any;
  style?: object;
}

const StatusReportDnChart = ({
  title,
  data,
  options,
  style,
}: StatusReportDnChartProps) => {
  return (
    <Wrapper>
      <ReportSubtitle title={title} style={{ marginBottom: '1rem' }} />
      <ReportChart
        type="doughnut"
        data={data}
        options={options}
        style={style}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default StatusReportDnChart;
