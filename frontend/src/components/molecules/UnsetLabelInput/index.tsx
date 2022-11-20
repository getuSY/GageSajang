import React from 'react';
import styled from 'styled-components';
import Label from '../../atoms/Label';
import UnsetInput from '../../atoms/UnsetInput';
import { LabelInputContent } from '../../../models/common';

interface UnsetLabelInputProps extends LabelInputContent {
  type: 'text' | 'email' | 'password' | 'date' | 'number';
  style?: object;
  id?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const LinedBox = styled.div`
  display: flex;
  flex-direction: column;
  border-width: none none 5px none;
  border-color: #66d291;
  border-style: none none solid none;
  width: 400px;
  padding: 5px none;
`;

const UnsetLabelInput = ({
  type,
  label,
  placeholder,
  style,
  id,
  onChange,
}: UnsetLabelInputProps) => {
  return (
    <Wrapper>
      <LinedBox style={style}>
        <Label htmlFor={id} style={{ marginBottom: '0.4rem' }}>
          {label}
        </Label>
        <UnsetInput
          type={type}
          placeholder={placeholder}
          id={id}
          onChange={onChange}
        />
      </LinedBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default UnsetLabelInput;
