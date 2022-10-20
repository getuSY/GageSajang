import React from "react";
import styled from "styled-components";

type BorderButtonProps = {
  text: String;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const BorderButton = ({ text, onClick }: BorderButtonProps) => {
  return (
    <BorderWrapper>
      <Wrapper onClick={onClick}>
        <span>{text}</span>
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
  /* background: linear-gradient(90deg, #29187c -10.69%, #d00cf0 40.09%, #e12c61 119.31%); */
  background: ${({ theme }) => theme.gradColor};
  border-radius: 15px;
`;

const Wrapper = styled.button`
  cursor: pointer;
  width: 141px;
  height: 50px;
  position: relative;
  overflow: hidden;
  /* background: white; */
  border-radius: 13px;
  font-size: 20px;
  color: black;
  /* background: linear-gradient(90deg, #29187c -10.69%, #d00cf0 40.09%, #e12c61 119.31%); */
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
    content: "";
    position: absolute;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
  }
  /* &:hover {
    color: white;
  }
  &:hover:before {
    transition: 0.2s ease;
    width: 0%;
  } */
`;

export default BorderButton;
