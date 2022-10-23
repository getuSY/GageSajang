import React from 'react';
import styled from 'styled-components';
import NavItem from '../atoms/NavItem';

type NavItemsProps = {
  items: any;
};

const NavItems = ({ items }: NavItemsProps) => {
  return (
    <Wrapper>
      {items.map((item: any, idx: number) => (
        <NavItem content={item.content} linkTo={item.linkTo} key={idx} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 30px;
  margin-left: 40px;
`;

export default NavItems;
