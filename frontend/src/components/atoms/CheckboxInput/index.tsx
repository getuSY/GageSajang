import React from 'react';
import styled from 'styled-components';

interface CheckboxInputProps {
  style?: object;
}

const CheckboxInput = ({ style }: CheckboxInputProps) => {
  return <StyledInput type="checkbox" style={style} />;
};

const StyledInput = styled.input`
  height: 45px;
  font-weight: 900;
  font-size: 1rem;
  padding: 0 20px;
  background: #eaeaea;
  border: none;
  border-radius: 10px;
  accent-color: #66d291;
  cursor: pointer;
`;

export default CheckboxInput;
