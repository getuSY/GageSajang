import React from 'react';
import styled from 'styled-components';
import Label from '../../atoms/Label';
import Input from '../../atoms/Input';
import { LabelInputContent } from '../../../models/common';

// interface LabelInputProps {}

const LabelInput = ({ label, placeholder }: LabelInputContent) => {
  return (
    <Wrapper>
      <Label style={{ marginBottom: '1.3rem' }}>{label}</Label>
      <Input placeholder={placeholder} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default LabelInput;
