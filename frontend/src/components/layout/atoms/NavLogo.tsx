import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface NavLogoProps {
  content: String;
  linkTo: any;
}

const NavLogo = ({ content, linkTo }: NavLogoProps) => {
  return (
    <Wrapper>
      <Link to={linkTo}>{content}</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & a {
    font-size: 26px;
  }
`;

export default NavLogo;
