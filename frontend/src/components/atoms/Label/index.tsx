import React from 'react';
import styled from 'styled-components';

interface LabelProps {
  children?: React.ReactNode;
  style?: object;
  onClickLabelHandler?: React.MouseEventHandler<HTMLLabelElement>;
}

const Label = ({ children, style, onClickLabelHandler }: LabelProps) => {
  return (
    <Wrapper style={style} onClick={onClickLabelHandler}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.label`
  font-size: 1.3rem;
  font-family: 'Pretendard-Regular';
  cursor: pointer;
`;

export default Label;
