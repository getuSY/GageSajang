import React from 'react';
import styled from 'styled-components';
import Label from '../../atoms/Label';
import CheckboxInput from '../../atoms/CheckboxInput';
import { LabelInputContent } from '../../../models/common';

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
  gap: 1rem;
`;

export default CheckLabelInput;
