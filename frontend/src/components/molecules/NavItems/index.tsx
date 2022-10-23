import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface NavItemsProps {
  items: any;
}

const NavItems = ({ items }: NavItemsProps) => {
  return (
    <Wrapper>
      {items.map((item: any, idx: number) => (
        <Link to={item.linkTo} className="nav-item">
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
