import React from 'react';
import styled from 'styled-components';

interface GradBoxProps {
  style?: object;
}

const GradBox = ({ style }: GradBoxProps) => {
  return <GradDiv style={style}></GradDiv>;
};

export const GradDiv = styled.div`
  background: linear-gradient(#ffffff 0 0) padding-box,
    linear-gradient(to right, #01ad7c, #fff80b) border-box;
  color: #313149;
  padding: 10px;
  border: 10px solid transparent;
  border-radius: 20px;
  display: inline-block;
  width: 700px;
  height: 500px;
  margin: 75px 0;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
`;

// const Wrapper = styled.div`
//   width: 900px;
//   height: 900px;
// `;

export default GradBox;
