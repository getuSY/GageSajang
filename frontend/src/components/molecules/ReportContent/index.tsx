import React from 'react';
import styled from 'styled-components';
import Label from '../../atoms/Label';
import ReportChart from '../../atoms/ReportChart';

interface ReportContentProps {
  children?: React.ReactNode;
  style?: object;
  propsRef?: any;
  title?: string;
  chartData?: any;
}

const ReportContent = ({
  children,
  style,
  propsRef,
  title,
  chartData,
}: ReportContentProps) => {
  return (
    <Wrapper style={style} ref={propsRef}>
      {title && <Label style={{ marginBottom: '1.25rem' }}>{title}</Label>}
      {chartData && (
        <ReportChart
          type={chartData.type}
          data={chartData.data}
          grad={chartData.grad}
        />
      )}
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #ffffff;
  /* height: 500px; */
  display: flex;
  flex-direction: column;

  padding: 20px 20px;
  border-radius: 10px;
`;

export default ReportContent;
