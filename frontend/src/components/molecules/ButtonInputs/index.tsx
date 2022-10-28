import React, { useState } from 'react';
import styled from 'styled-components';
import Label from '../../atoms/Label';
import MenuButton from '../../atoms/MenuButton';

interface ButtonInputsProps {
  label: string;
  menuList: Array<any>;
}

const ButtonInputs = ({ label, menuList }: ButtonInputsProps) => {
  return (
    <Wrapper>
      <>
        <Label>{label}</Label>
        <div className="menu-container">
          {menuList.map((menu, idx) => (
            <MenuButton menu={menu.name} key={idx} onClick={menu.onClick} />
          ))}
        </div>
      </>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & .menu-container {
    display: flex;
    gap: 10px;
  }
`;

export default ButtonInputs;
