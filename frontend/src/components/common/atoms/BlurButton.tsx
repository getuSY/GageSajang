import React from 'react';
import styled from 'styled-components';

type BlurButtonProps = {
  content: String;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  style?: any;
  status?: boolean;
};

const BlurButton = ({ content, onClick, style }: BlurButtonProps) => {
  return (
    <Wrapper onClick={onClick} style={style} status>
      <div className="blur-effect" />
      {content}
    </Wrapper>
  );
};

interface WrapperProps {
  status?: boolean;
}

const Wrapper = styled.button<WrapperProps>`
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
    width: 250px;
    opacity: 0.6;

    height: 57px;
    z-index: -1;
    background: ${({ theme }) => theme.blurColor};
    filter: blur(18.7089px);
  }

  &:hover {
    cursor: pointer;
  }
`;

export default BlurButton;
