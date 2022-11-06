import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: object;
  children?: React.ReactNode;
  active?: boolean;
}

const BaseSideBarButton = ({
  onClick,
  style,
  children,
  active,
}: ButtonProps) => {
  return (
    <Wrapper style={style} active={active} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

interface WrapperProps {
  active?: boolean;
}

const Wrapper = styled.button<WrapperProps>`
  width: 6.5rem;
  height: 4.5rem;
  font-size: 16px;
  border-radius: 15px;
  border: ${({ active, theme }) =>
    active ? `3px solid ${theme.darkColor}` : '1px solid darkgray'};
  color: ${({ active, theme }) => (active ? theme.darkColor : '#000')};
  font-family: 'Pretendard-Regular';
  letter-spacing: 2px;
  background: transparent;

  &:hover {
    cursor: pointer;
    border-radius: 15px;
    border: ${({ theme }) => `3px solid ${theme.darkColor}`};
  }
`;

export default BaseSideBarButton;
