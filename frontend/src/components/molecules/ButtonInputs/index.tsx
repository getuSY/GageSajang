import React, { useState } from 'react';
import styled from 'styled-components';
import BaseSideBarButton from '../../atoms/BaseSideBarButton';
import MenuButton from '../../atoms/MenuButton';

interface ButtonInputsProps {
  label: string;
  menuList: Array<any>;
}

const ButtonInputs = ({ label, menuList }: ButtonInputsProps) => {
  return (
    <Wrapper>
      <Sub_Title>{label}</Sub_Title>
      <div className="menu-container">
        {menuList.map((menu, idx) => (
          <BaseSideBarButton key={idx} onClick={menu.onClick}>
            {menu.name}
          </BaseSideBarButton>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  & .menu-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const Sub_Title = styled.div`
  font-size: 1.3rem;
  font-family: 'Eoe_Zno_B';
  margin-bottom: 1.2rem;
`;

export default ButtonInputs;
