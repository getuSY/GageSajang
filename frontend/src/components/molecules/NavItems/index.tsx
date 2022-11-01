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
  gap: 40px;
  margin-left: 100px;
  & .nav-item {
    font-family: 'Pretendard-Regular';
    font-size: 1.1rem;
  }
`;

export default NavItems;
