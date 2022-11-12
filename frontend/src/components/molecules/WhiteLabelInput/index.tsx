import React from 'react';
import styled from 'styled-components';
import Label from '../../atoms/Label';
import UnsetInput from '../../atoms/UnsetInput/index';
import { LabelInputContent } from '../../../models/common';
import { UnsetInputProps } from '../../atoms/UnsetInput';

interface WhiteLabelInputProps extends UnsetInputProps {
  label: string;
}

const WhiteLabelInput = ({
  type,
  label,
  placeholder,
  value,
}: WhiteLabelInputProps) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <span>:</span>
      <UnsetInput
        type={type}
        placeholder={placeholder}
        style={inputStyle}
        value={value}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: start;
  align-items: center;
`;

const inputStyle = {
  width: '500px',
};

export default WhiteLabelInput;
