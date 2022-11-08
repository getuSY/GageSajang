import React from 'react';
import styled from 'styled-components';

interface ReportContentProps {
  children: React.ReactNode;
  style?: object;
  propsRef?: any;
}

const ReportContent = ({ children, style, propsRef }: ReportContentProps) => {
  return (
    <Wrapper style={style} ref={propsRef}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #ffffff;
  /* min-height: 60px; */
  display: flex;

  padding: 20px 20px;
  border-radius: 10px;
`;

export default ReportContent;
