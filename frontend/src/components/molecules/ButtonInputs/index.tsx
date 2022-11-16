import React from 'react';
import styled from 'styled-components';

interface ButtonInputsProps {
  style?: object;
  menuList: Array<any>;
  tab?: number;
}

const ButtonInputs = ({ style, menuList, tab }: ButtonInputsProps) => {
  return (
    <Wrapper style={style}>
      <div className="menu-container">
        {menuList.map((menu, idx) => (
          <BaseSideBarButton
            key={idx}
            onClick={menu.onClick}
            active={tab === idx}
          >
            {menu.name}
          </BaseSideBarButton>
        ))}
      </div>
    </Wrapper>
  );
};

interface WrapperProps {
  isHide?: boolean | undefined;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  & .menu-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.3rem;
    margin-top: 1rem;
  }
`;

interface BaseSideBarButtonProps {
  active?: boolean;
}

const BaseSideBarButton = styled.button<BaseSideBarButtonProps>`
  width: 6.5rem;
  height: 4.5rem;
  font-size: 16px;
  border-radius: 15px;
  border: ${({ active, theme }) =>
    active ? `3px solid ${theme.darkColor}` : '1px solid darkgray'};
  color: ${({ active, theme }) => (active ? theme.darkColor : '#000')};
  font-family: 'Pretendard-Regular';
  letter-spacing: 2px;
  background: transparent;
  font-weight: ${({ active }) => (active ? 700 : '')};

  &:hover {
    cursor: pointer;
    border-radius: 15px;
    color: ${({ theme }) => `${theme.darkColor}`};
    border: ${({ theme }) => `3px solid ${theme.darkColor}`};
    font-weight: 700;
  }
`;

export default ButtonInputs;
