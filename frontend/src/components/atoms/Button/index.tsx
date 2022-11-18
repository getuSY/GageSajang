import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type: 'blur' | 'border' | 'grad' | 'main' | 'sub';
  style?: object;
  children?: React.ReactNode;
  disabled?: boolean;
}

const Button = ({ onClick, type, style, children, disabled }: ButtonProps) => {
  return (
    <>
      {type === 'blur' && (
        <BlurButton onClick={onClick} style={style} disabled={disabled}>
          <div className="blur-effect" style={style} />
          {children}
        </BlurButton>
      )}
      {type === 'border' && (
        <BorderWrapper style={style} disabled={disabled}>
          <BorderButton onClick={onClick} disabled={disabled}>
            {children}
          </BorderButton>
        </BorderWrapper>
      )}
      {type === 'grad' && (
        <GradButton onClick={onClick} style={style} disabled={disabled}>
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

interface BlurButtonProps {
  disabled?: boolean;
}

const BlurButton = styled.button<BlurButtonProps>`
  width: 250px;
  height: 72px;
  position: relative;

  color: 000000;
  font-size: 1.3rem;
  background: #ffffff;
  border-radius: 15px;
  border: ${({ disabled }) => (!disabled ? '' : '1px solid #d9d9d9')};

  & .blur-effect {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 250px;
    opacity: 0.6;

    height: 57px;
    z-index: -1;
    background: ${({ theme, disabled }) => (!disabled ? theme.blurColor : '')};

    filter: blur(18.7089px);
  }
  cursor: pointer;
`;

const GradButton = styled.button`
  cursor: pointer;
  width: 145px;
  height: 54px;
  background: ${({ theme }) => theme.gradColor};
  border-radius: 15px;
  font-size: 16px;
  color: white;
`;

const MainButton = styled.button`
  cursor: pointer;
  width: 145px;
  height: 54px;
  background: ${({ theme }) => theme.mainColor};
  border-radius: 15px;
  font-size: 16px;
  color: white;
`;

const SubButton = styled.button`
  cursor: pointer;
  width: 145px;
  height: 54px;
  background: ${({ theme }) => theme.subColor};
  border-radius: 15px;
  font-size: 16px;
  color: white;
`;

const BorderWrapper = styled.div<{ disabled?: boolean }>`
  position: relative;
  width: 145px;
  height: 54px;
  font-size: 16px;
  border: ${({ disabled }) =>
    disabled ? '3px solid #c0c0c0' : '3px solid transparent'};
  border-radius: 15px;
  background-image: linear-gradient(#fff, #fff),
    ${({ theme }) => theme.gradColor};
  box-sizing: border-box;
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const BorderButton = styled.button<{ disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? '' : 'pointer')};
  position: absolute;
  font-size: inherit;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: transparent;
`;

export default Button;
