import React from 'react';
import styled from 'styled-components';

interface MainButtonProps {
  content: String;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  style?: Object;
}

const MainButton = ({ content, onClick, style }: MainButtonProps) => {
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
  background: ${({ theme }) => theme.mainColor};
  border-radius: 15px;
  font-size: 20px;
  color: white;
`;

export default MainButton;
