import React from 'react';
import styled from 'styled-components';

type GradButtonProps = {
  content: String;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  style?: any;
  status?: boolean;
};

const GradButton = ({ content, onClick, style, status }: GradButtonProps) => {
  return (
    <Wrapper onClick={onClick} style={style} status>
      {content}
    </Wrapper>
  );
};

interface WrapperProps {
  status?: boolean;
}

const Wrapper = styled.button<WrapperProps>`
  cursor: pointer;
  width: 145px;
  height: 54px;
  background: ${({ theme, status }) =>
    status
      ? 'linear-gradient(90deg, #EB2B5E -10.69%, #FF4D00 31.97%, #FFB800 119.31%)'
      : theme.gradColor};
  border-radius: 15px;
  font-size: 20px;
  color: white;
`;

export default GradButton;
