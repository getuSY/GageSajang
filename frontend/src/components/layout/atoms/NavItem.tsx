import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type NavItemProps = {
  content: String;
  linkTo: any;
};

const NavItem = ({ content, linkTo }: NavItemProps) => {
  return (
    <Wrapper>
      <Link to={linkTo}>{content}</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & a {
    font-size: 18px;
  }
`;

export default NavItem;
