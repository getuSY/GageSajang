import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavItem } from '../../../models/common';
import { useLocation } from 'react-router-dom';

interface NavItemsProps {
  items: Array<NavItem>;
}

const NavItems = ({ items }: NavItemsProps) => {
  const location = useLocation();
  return (
    <Wrapper>
      {items.map((item: NavItem, idx: number) => (
        <Link
          to={item.linkTo}
          key={idx}
          className={
            location.pathname.includes(item.linkTo)
              ? 'nav-item active'
              : 'nav-item'
          }
        >
          {item.content}
        </Link>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 20px;
  margin-left: 50px;
  & .nav-item {
    font-family: 'Pretendard-Regular';
    font-size: 1.1rem;
    position: relative;
    /* color: #909090; */
    padding: 0.5rem 0.5rem;
  }
  & .active {
    /* color: #000000; */
    color: ${({ theme }) => theme.darkColor};
    font-weight: 700;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      height: 3px;
      /* top: 0; */
      bottom: 0;
      background: ${({ theme }) => theme.gradColor};
    }
  }
`;

export default NavItems;
