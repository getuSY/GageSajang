import React from 'react';
import styled from 'styled-components';
import LineChart from '../../atoms/LineChart';
import ReportSubtitle from '../../atoms/ReportSubtitle';

interface StatusReportLineChartProps {
  title: string;
  //   data: ChartData<'line'>;
  //   options?: ChartOptions<'line'>;
  data: any;
  options?: any;
  style?: object;
}

const StatusReportLineChart = ({
  title,
  data,
  options,
  style,
}: StatusReportLineChartProps) => {
  return (
    <Wrapper style={style}>
      <ReportSubtitle
        title={title}
        style={{ marginBottom: '1rem' }}
      ></ReportSubtitle>
      <LineChart data={data} options={options} style={{ width: '450px' }} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default StatusReportLineChart;
