import React from 'react';
import styled from 'styled-components';

interface SubButtonProps {
  content: String;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  style?: any;
}

const SubButton = ({ content, onClick, style }: SubButtonProps) => {
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
  background: ${({ theme }) => theme.subColor};
  border-radius: 15px;
  font-size: 20px;
  color: white;
`;

export default SubButton;
