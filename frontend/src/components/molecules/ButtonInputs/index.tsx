import React from 'react';
import styled from 'styled-components';
import BaseSideBarButton from '../../atoms/BaseSideBarButton';

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
    display: flex;
    flex-wrap: wrap;
    gap: 1.3rem;
    margin-top: 1rem;
  }
`;

export default ButtonInputs;
