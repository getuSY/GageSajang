import React from 'react';
import styled from 'styled-components';

interface BorderButtonProps {
  content: String;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  style?: Object;
}

const BorderButton = ({ content, onClick, style }: BorderButtonProps) => {
  return (
    <BorderWrapper style={style}>
      <Wrapper onClick={onClick}>
        <span>{content}</span>
      </Wrapper>
    </BorderWrapper>
  );
};

const BorderWrapper = styled.div`
  width: 145px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.gradColor};
  border-radius: 15px;
  font-size: 20px;
`;

const Wrapper = styled.button`
  cursor: pointer;
  width: calc(100% - 5px);
  height: calc(100% - 5px);
  position: relative;
  overflow: hidden;
  border-radius: 13px;
  font-size: inherit;
  color: black;
  & span {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
  }
`;

export default BorderButton;
