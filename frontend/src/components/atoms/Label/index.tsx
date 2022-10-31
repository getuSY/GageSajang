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
  font-size: 1.3rem;
  font-family: 'Eoe_Zno_B';
`;

export default Label;
