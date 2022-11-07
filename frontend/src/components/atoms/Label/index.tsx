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
    <Wrapper
      style={style}
      onClick={onClickLabelHandler}
      htmlFor={htmlFor}
      cursor={onClickLabelHandler !== undefined}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.label<{ cursor?: boolean }>`
  font-size: 1.3rem;
  font-family: 'Pretendard-Regular';
  cursor: ${({ cursor }) => (cursor ? 'pointer' : '')};
`;

export default Label;
