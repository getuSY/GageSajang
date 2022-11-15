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
  isVert?: boolean;
  chartStyle?: any;
  canvasStyle?: any;
}

const ReportContent = ({
  children,
  style,
  propsRef,
  title,
  chartData,
  isVert,
  chartStyle,
  canvasStyle,
}: ReportContentProps) => {
  return (
    <Wrapper style={style} ref={propsRef}>
      {title && <Label style={{ width: '100%' }}>{title}</Label>}
      {chartData && (
        <ReportChart
          type={chartData.type}
          data={chartData.data}
          grad={chartData.grad}
          options={chartData.options}
          isVert={isVert}
          style={{ marginTop: '1.25rem', ...chartStyle }}
          canvasStyle={canvasStyle}
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
  align-items: center;

  padding: 20px 20px;
  border-radius: 10px;
`;

export default ReportContent;
