import React from 'react';
import styled from 'styled-components';
import ReportChart from '../../atoms/ReportChart';

interface StatusReportChartProps {
  type: 'bar' | 'bubble' | 'doughnut' | 'line' | 'pie' | 'polarArea' | 'radar';
  title: string;
  data: any;
  options: any;
  style?: object;
  canvasStyle?: object;
  grad?: any;
}
const StatusReportChart = ({
  type,
  title,
  data,
  options,
  style,
  canvasStyle,
  grad,
}: StatusReportChartProps) => {
  return (
    <Wrapper style={style}>
      <ReportSubTitle style={{}}>{title}</ReportSubTitle>
      <ReportChart
        type={type}
        data={data}
        options={options}
        style={{ width: '450px' }}
        canvasStyle={canvasStyle}
        grad={grad}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const ReportSubTitle = styled.div`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-family: 'GmarketSansMedium';
  font-weight: 700;
  /* background: ${({ theme }) => theme.gradColor}; */
  width: fit-content;
  /* color: transparent; */
  /* -webkit-background-clip: text; */
`;

export default StatusReportChart;
