import React from 'react';
import styled from 'styled-components';

interface GradButtonProps {
  content: String;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  style?: Object;
}

const GradButton = ({ content, onClick, style }: GradButtonProps) => {
  return (
    <Wrapper onClick={onClick} style={style}>
      {content}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  cursor: pointer;
  width: 145px;
  height: 54px;
  background: ${({ theme }) => theme.gradColor};
  border-radius: 15px;
  font-size: 20px;
  color: white;
`;

export default GradButton;
