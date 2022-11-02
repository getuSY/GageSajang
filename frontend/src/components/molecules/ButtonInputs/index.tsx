import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BaseSideBarButton from '../../atoms/BaseSideBarButton';
import Button from '../../atoms/Button';
import Label from '../../atoms/Label';

interface ButtonInputsProps {
  label: string;
  menuList: Array<any>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  category?: string;
  isHide?: boolean | undefined;
  onClickLabelHandler?: React.MouseEventHandler<HTMLLabelElement>;
}

const ButtonInputs = ({
  label,
  menuList,
  category,
  isHide,
  onClickLabelHandler,
}: ButtonInputsProps) => {
  return (
    <Wrapper isHide={isHide}>
      <Label
        style={{ marginBottom: '1.3rem' }}
        onClickLabelHandler={onClickLabelHandler}
      >
        {label}
      </Label>
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

interface WrapperInterface {
  isHide?: boolean | undefined;
}

const Wrapper = styled.div<WrapperInterface>`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  & .menu-container {
    display: ${({ isHide }) => (isHide ? 'none' : 'flex')};
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export default ButtonInputs;
