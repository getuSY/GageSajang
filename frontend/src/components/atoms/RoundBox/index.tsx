import React from 'react';
import styled from 'styled-components';

interface RoundBoxProps {
  style?: object;
  children?: React.ReactNode;
}

const RoundBox = ({ style, children }: RoundBoxProps) => {
  return <Wrapper style={style}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 1000px;
  /* height: 600px; */
  background: #ffffff;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.25);
  border-radius: 45px;
`;

export default RoundBox;
