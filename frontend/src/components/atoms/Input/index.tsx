import React from 'react';
import styled from 'styled-components';

interface InputProps {
  placeholder: string;
  style?: object;
}

const Input = ({ placeholder, style }: InputProps) => {
  return <StyledInput placeholder={placeholder} style={style} />;
};

const StyledInput = styled.input`
  height: 45px;
  font-weight: 900;
  font-size: 1rem;
  padding: 0 20px;
  background: #eaeaea;
  border: none;
  border-radius: 10px;
`;

export default Input;
