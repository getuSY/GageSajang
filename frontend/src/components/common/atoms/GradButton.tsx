import React from "react";
import styled from "styled-components";

type GradButtonProps = {
  text: String;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const GradButton = ({ text, onClick }: GradButtonProps) => {
  return <Wrapper onClick={onClick}>{text}</Wrapper>;
};

const Wrapper = styled.button`
  cursor: pointer;
  width: 145px;
  height: 54px;
  /* background: linear-gradient(90deg, #29187c -10.69%, #d00cf0 40.09%, #e12c61 119.31%); */
  background: ${({ theme }) => theme.gradColor};
  border-radius: 15px;
  font-size: 20px;
  color: white;
`;

export default GradButton;
