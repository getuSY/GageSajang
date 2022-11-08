import React from 'react';
import styled from 'styled-components';
import ReportSubtitle from '../../atoms/ReportSubtitle';
import ReportChart from '../../atoms/ReportChart';

interface StatusReportChartsProps {
  type: 'bar' | 'bubble' | 'doughnut' | 'line' | 'pie' | 'polarArea' | 'radar';
  title: string;
  data: any;
  options: any;
  style?: object;
}

const StatusReportCharts = ({
  type,
  title,
  data,
  options,
  style,
}: StatusReportChartsProps) => {
  return (
    <Wrapper>
      <ReportSubtitle title={title} style={{ marginBottom: '1rem' }} />
      <ReportChart type={type} data={data} options={options} style={style} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default StatusReportCharts;
