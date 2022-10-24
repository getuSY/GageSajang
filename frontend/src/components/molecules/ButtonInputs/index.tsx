import React, { useState } from 'react';
import styled from 'styled-components';
import Label from '../../atoms/Label';

interface ButtonInputsProps {
  label: string;
}

const ButtonInputs = ({ label }: ButtonInputsProps) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & .tag {
  }
`;

export default ButtonInputs;
