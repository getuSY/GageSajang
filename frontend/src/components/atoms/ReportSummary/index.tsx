import React from 'react';
import styled from 'styled-components';

interface ReportSummaryProps {
  style?: object;
  children?: React.ReactNode;
}

const ReportSummary = ({ style, children }: ReportSummaryProps) => {
  return <Wrapper style={style}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  background-color: #f4f4f4;
  padding: 30px 0px 30px 20px;
  border-left: ${({ theme }) => `3px solid ${theme.darkColor}`};
`;

export default ReportSummary;
