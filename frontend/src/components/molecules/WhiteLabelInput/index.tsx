import React from 'react';
import styled from 'styled-components';
import Label from '../../atoms/Label';
import UnsetInput from '../../atoms/UnsetInput/index';
import { LabelInputContent } from '../../../models/common';

// interface WhiteLabelInputProps {
//   label: string;
//   placeholder: string;
// }

const WhiteLabelInput = ({ label, placeholder }: LabelInputContent) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <span>:</span>
      <UnsetInput placeholder={placeholder} style={inputStyle} />
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
