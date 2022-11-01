import React from 'react';
import styled from 'styled-components';
import Label from '../../atoms/Label';
import Input from '../../atoms/Input';
import { LabelInputContent } from '../../../models/common';

interface LabelInputProps {
  label: string;
  placeholder: string;
  inputValue?: string;
  clearValue?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const LabelInput = ({
  label,
  placeholder,
  onChange,
  inputValue,
  clearValue,
}: LabelInputProps) => {
  return (
    <Wrapper>
      <Label style={{ marginBottom: '1.3rem' }}>{label}</Label>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        inputValue={inputValue}
        clearValue={clearValue}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default LabelInput;
