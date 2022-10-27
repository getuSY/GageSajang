import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type: 'blur' | 'border' | 'grad' | 'main' | 'sub';
  style?: object;
  children?: React.ReactNode;
}

const Button = ({ onClick, type, style, children }: ButtonProps) => {
  return (
    <>
      {type === 'blur' && (
        <BlurButton onClick={onClick} style={style}>
          <div className="blur-effect" style={style} />
          {children}
        </BlurButton>
      )}
      {type === 'border' && (
        <BorderWrapper style={style}>
          <BorderButton onClick={onClick}>{children}</BorderButton>
        </BorderWrapper>
      )}
      {type === 'grad' && (
        <GradButton onClick={onClick} style={style}>
          {children}
        </GradButton>
      )}
      {type === 'main' && (
        <MainButton onClick={onClick} style={style}>
          {children}
        </MainButton>
      )}
      {type === 'sub' && (
        <SubButton onClick={onClick} style={style}>
          {children}
        </SubButton>
      )}
    </>
  );
};

const BlurButton = styled.button`
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

const GradButton = styled.button`
  cursor: pointer;
  width: 145px;
  height: 54px;
  background: ${({ theme }) => theme.gradColor};
  border-radius: 15px;
  font-size: 20px;
  color: white;
`;

const MainButton = styled.button`
  cursor: pointer;
  width: 145px;
  height: 54px;
  background: ${({ theme }) => theme.mainColor};
  border-radius: 15px;
  font-size: 20px;
  color: white;
`;

const SubButton = styled.button`
  cursor: pointer;
  width: 145px;
  height: 54px;
  background: ${({ theme }) => theme.subColor};
  border-radius: 15px;
  font-size: 20px;
  color: white;
`;

const BorderWrapper = styled.div`
  position: relative;
  width: 145px;
  height: 54px;
  border: 3px solid transparent;
  border-radius: 15px;
  background-image: linear-gradient(#fff, #fff),
    ${({ theme }) => theme.gradColor};
  box-sizing: border-box;
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const BorderButton = styled.button`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: transparent;
`;

export default Button;
