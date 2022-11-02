import React from 'react';
import styled from 'styled-components';

interface LeftLineTitleProps {
  style?: object;
  children?: React.ReactNode;
}

const LeftLineTitle = ({ style, children }: LeftLineTitleProps) => {
  return <Wrapper style={style}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  margin: 2rem 0rem;
  padding: 1rem 0rem 1rem 1rem;
  border-width: 0px 0px 0px 8px;
  border-color: #66d291;
  border-style: none none none solid;
  width: 400px;
`;

export default LeftLineTitle;
