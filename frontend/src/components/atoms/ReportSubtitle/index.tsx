import React from 'react';
import styled from 'styled-components';

interface ReportSubtitleProps {
  style?: object;
  title: any;
}

const ReportSubtitle = ({ style, title }: ReportSubtitleProps) => {
  return <Wrapper style={style}>{title}</Wrapper>;
};

const Wrapper = styled.div`
  font-size: 1.5rem;
  font-family: 'GmarketSansMedium';
  font-weight: 700;
  background: ${({ theme }) => theme.gradColor};
  width: fit-content;
  color: transparent;
  -webkit-background-clip: text;
`;

export default ReportSubtitle;
