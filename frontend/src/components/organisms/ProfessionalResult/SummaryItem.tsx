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
  iconSrc: string;
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
  iconSrc,
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
            marginBottom: '1.5rem',
          }}
        >
          {title}
        </Label>
      )}
      <div className="summary-content-div">
        <img src={iconSrc} className="summary-icon" />
        <div className="summary-content">{children}</div>
      </div>
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
  height: 120px;

  & .summary-content-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 20px;
    & .summary-icon {
    }
    & .summary-content {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 10rem;
    }
  }
`;

export default SummaryItem;
