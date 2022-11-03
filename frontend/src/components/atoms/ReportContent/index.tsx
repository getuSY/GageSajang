import React from 'react';
import styled from 'styled-components';

interface ReportContentProps {
  children: React.ReactNode;
  style?: object;
}

const ReportContent = ({ children, style }: ReportContentProps) => {
  return <Wrapper style={style}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  background: #ffffff;
  /* min-height: 60px; */
  display: flex;

  padding: 20px 20px;
  border-radius: 10px;
`;

export default ReportContent;
