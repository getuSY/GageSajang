import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavItem } from '../../../models/common';

interface NavItemsProps {
  items: Array<NavItem>;
}

const NavItems = ({ items }: NavItemsProps) => {
  return (
    <Wrapper>
      {items.map((item: NavItem, idx: number) => (
        <Link to={item.linkTo} className="nav-item" key={idx}>
          {item.content}
        </Link>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 30px;
  margin-left: 40px;
  & .nav-item {
    font-size: 18px;
  }
`;

export default NavItems;
