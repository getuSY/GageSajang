import React from 'react';
import styled from 'styled-components';
import NavItems from '../molecules/NavItems';
import NavLogo from '../atoms/NavLogo';
import NavButton from '../molecules/NavButton';
import NavUserInfo from '../molecules/NavUserInfo';

type userType = {
  username: String;
};

type NavbarProps = {
  navList: Array<Object>;
  toLogin: any;
  toRegister: any;
  userInfo: userType | null;
};

const Navbar = ({ navList, toLogin, toRegister, userInfo }: NavbarProps) => {
  return (
    <Wrapper>
      <NavLogo content="가게사장" linkTo="/" />
      <NavItems items={navList} />
      {!userInfo ? (
        <NavButton toLogin={toLogin} toRegister={toRegister} />
      ) : (
        <NavUserInfo userInfo={userInfo} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 80px;
  background-color: #ffffff;
  padding: 0px 80px;
`;

export default Navbar;
