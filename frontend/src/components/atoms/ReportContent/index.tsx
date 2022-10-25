import React from 'react';
import styled from 'styled-components';

interface ReportContentProps {
  children: React.ReactNode;
  style?: object;
}

const ReportContent = ({ children, style }: ReportContentProps) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  background: #ffffff;
  min-height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

export default ReportContent;
