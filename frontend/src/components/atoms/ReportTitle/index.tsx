import React from 'react';
import styled from 'styled-components';

interface ReportTitleProps {
  children: React.ReactNode;
  style?: object;
}

const ReportTitle = ({ children, style }: ReportTitleProps) => {
  return (
    <Wrapper style={style}>
      <div>{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 66px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  background: #ffffff;
`;

export default ReportTitle;
