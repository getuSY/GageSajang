import React from 'react';
import styled from 'styled-components';
import ReportChart from '../../atoms/ReportChart';

interface StatusReportChartProps {
  type: any;
  title: string;
  data: any;
  options?: any;
  style?: object;
  canvasStyle?: object;
  grad?: any;
  isVert?: boolean;
}
const StatusReportChart = ({
  type,
  title,
  data,
  options,
  style,
  canvasStyle,
  grad,
  isVert = true,
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
        isVert={isVert}
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
