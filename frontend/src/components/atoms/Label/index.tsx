import React from 'react';
import styled from 'styled-components';

interface LabelProps {
  children?: React.ReactNode;
  style?: object;
}

const Label = ({ children, style }: LabelProps) => {
  return <Wrapper style={style}>{children}</Wrapper>;
};

const Wrapper = styled.label`
  /* padding: 0px 12px; */
  height: 40px;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 29px;
`;

export default Label;
