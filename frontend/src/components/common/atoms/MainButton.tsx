import React from "react";
import styled from "styled-components";

type MainButtonProps = {
  text: String;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const MainButton = ({ text, onClick }: MainButtonProps) => {
  return <Wrapper onClick={onClick}>{text}</Wrapper>;
};

const Wrapper = styled.button`
  cursor: pointer;
  width: 145px;
  height: 54px;
  background: ${({ theme }) => theme.mainColor};
  border-radius: 15px;
  font-size: 20px;
  color: white;
`;

export default MainButton;
