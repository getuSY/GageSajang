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

const SummaryItem = ({
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
      {title && (
        <Label
          style={{
            width: '100%',
            fontSize: '1.3rem',
            color: '#1ca37c',
            fontWeight: 700,
            marginBottom: '1.3rem',
          }}
        >
          {title}
        </Label>
      )}
      <div className="content">{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
  border-radius: 10px;
  font-size: 1.2rem;
  height: 140px;
  & .content {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default SummaryItem;
