import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BaseSideBarButton from '../../atoms/BaseSideBarButton';
import Button from '../../atoms/Button';
import Label from '../../atoms/Label';
import MenuButton from '../../atoms/MenuButton';

interface ButtonInputsProps {
  // label: string;
  style?: object;
  menuList: Array<any>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
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
            active={tab === idx + 1}
          >
            {menu.name}
          </BaseSideBarButton>
        ))}
      </div>
    </Wrapper>
  );
};

interface WrapperInterface {
  isHide?: boolean | undefined;
}

const Wrapper = styled.div<WrapperInterface>`
  display: flex;
  flex-direction: column;
  & .menu-container {
    display: ${({ isHide }) => (isHide ? 'none' : 'flex')};
    flex-wrap: wrap;
    gap: 1.3rem;
    margin-top: 1rem;
  }
`;

export default ButtonInputs;
