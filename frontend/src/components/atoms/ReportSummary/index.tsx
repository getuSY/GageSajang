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
  padding: 20px 0px 20px 30px;
  border-left: ${({ theme }) => `3px solid ${theme.darkColor}`};
  /* width: 700px; */
`;

export default ReportSummary;
