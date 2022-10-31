import React from 'react';
import styled from 'styled-components';
import BaseSideBarButton from '../../atoms/BaseSideBarButton';
import Label from '../../atoms/Label';

interface ButtonInputsProps {
  label: string;
  menuList: Array<any>;
}

const ButtonInputs = ({ label, menuList }: ButtonInputsProps) => {
  return (
    <Wrapper>
      <Label style={{ marginBottom: '1.3rem' }}>{label}</Label>
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

export default ButtonInputs;
