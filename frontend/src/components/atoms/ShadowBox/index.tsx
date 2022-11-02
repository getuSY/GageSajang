import React from 'react';
import styled from 'styled-components';

interface ShadowBoxProps {
  style?: object;
  children?: React.ReactNode;
}

const ShadowBox = ({ style, children }: ShadowBoxProps) => {
  return <Wrapper style={style}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
`;

export default ShadowBox;
