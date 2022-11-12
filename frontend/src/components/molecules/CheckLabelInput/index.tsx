import React from 'react';
import styled from 'styled-components';
import Label from '../../atoms/Label';
import CheckboxInput from '../../atoms/CheckboxInput';

interface CheckLabelInputProps {
  label: string;
}

const CheckLabelInput = ({ label }: CheckLabelInputProps) => {
  return (
    <Wrapper>
      <CheckboxInput />
      <Label>{label}</Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export default CheckLabelInput;
