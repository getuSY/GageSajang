import React from 'react';
import styled from 'styled-components';

export interface UnsetInputProps {
  placeholder?: string;
  style?: object;
  type?: 'text' | 'email' | 'password' | 'number' | 'date';
  readonly value?: string;
}

const UnsetInput = ({ type, placeholder, style, value }: UnsetInputProps) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      style={style}
      value={value}
    />
  );
};

const StyledInput = styled.input`
  height: 45px;
  font-weight: 900;
  font-size: 24px;
  all: unset;
  /* @font-face {
    font-family: 'Eoe_Zno_EB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/Eoe_Zno_EB.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
    unicode-range: U+AC00-D7A3;
  }

  @font-face {
    font-family: 'Comfortaa';
    font-weight: normal;
    font-style: normal;
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039, U+0020-002F,
      U+003A-0040, U+005B-0060, U+007B-007E;
  } */
`;

export default UnsetInput;
