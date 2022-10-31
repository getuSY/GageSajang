import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: object;
  children?: React.ReactNode;
  title?: string;
}

const BaseSideBarButton = ({ onClick, style, children }: ButtonProps) => {
  return (
    <>
      <BorderWrapper style={style}>
        <BorderButton onClick={onClick}>{children}</BorderButton>
      </BorderWrapper>
    </>
  );
};

const BorderWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 60px;
  font-size: 16px;
  border: 2px solid transparent;
  border-radius: 15px;
  background-image: linear-gradient(#fff, #fff),
    ${({ theme }) => theme.gradColor};
  box-sizing: border-box;
  background-origin: border-box;
  background-clip: content-box, border-box;
  overflow: hidden;

  & :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.gradColor};
    color: white;
  }
`;

const BorderButton = styled.button`
  position: absolute;
  font-size: inherit;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: transparent;
  font-family: 'NanumBarunGothic';
  letter-spacing: 2px;

  & :hover {
  }
`;

export default BaseSideBarButton;
