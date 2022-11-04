import React from 'react';
import styled from 'styled-components';

interface LabelProps {
  children?: React.ReactNode;
  style?: object;
  htmlFor?: string;
  onClickLabelHandler?: React.MouseEventHandler<HTMLLabelElement>;
}

const Label = ({
  children,
  style,
  htmlFor,
  onClickLabelHandler,
}: LabelProps) => {
  return (
    <Wrapper style={style} onClick={onClickLabelHandler} htmlFor={htmlFor}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.label`
  font-size: 1.3rem;
  cursor: pointer;
`;

export default Label;
