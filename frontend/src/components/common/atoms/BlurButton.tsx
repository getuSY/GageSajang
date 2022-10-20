import React from "react";
import styled from "styled-components";

type BlurButtonProps = {
  text: String;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const BlurButton = ({ text, onClick }: BlurButtonProps) => {
  return (
    <Wrapper onClick={onClick}>
      <div className='blur-effect' />
      {text}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  width: 250px;
  height: 72px;
  position: relative;

  color: 000000;
  font-size: 20px;
  background: #ffffff;
  border-radius: 15px;

  & .blur-effect {
    position: absolute;
    left: 0;
    bottom: 0;
    /* z-index: -1; */
    width: 250px;
    opacity: 0.6;

    height: 57px;
    z-index: -1;
    background: linear-gradient(92.86deg, #0c0aa8 0%, #b10dab 40.62%, #ff0099 100%);
    filter: blur(18.7089px);
  }

  &:hover {
    cursor: pointer;
  }
`;

export default BlurButton;
