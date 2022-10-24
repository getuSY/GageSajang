import React from 'react';
import styled from 'styled-components';
import NavItems from '../../molecules/NavItems';
import NavUserInfo from '../../molecules/NavUserInfo';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button';
import { useNavigate } from 'react-router-dom';
import { User } from '../../../models/user';
import { NavItem } from '../../../models/common';

interface NavbarProps {
  userInfo: User | null;
  navList: Array<NavItem>;
}

const navButtonStyle = { width: '120px', height: '44px', fontSize: '1rem' };

const Navbar = ({ userInfo, navList }: NavbarProps) => {
  const navigate = useNavigate();
  const toLogin = () => {
    navigate('/login');
  };
  const toRegister = () => {
    navigate('/register');
  };
  return (
    <Wrapper>
      {/* NavBar Logo */}
      <NavLogo>
        <Link to="/" className="nav-logo">
          가게사장
        </Link>
      </NavLogo>
      {/* NavBar Menu Items */}
      <NavItems items={navList} />
      {!userInfo ? (
        // Login 안되어 있을 시
        <NavButtons>
          <Button style={navButtonStyle} onClick={toRegister} type="grad">
            회원가입
          </Button>
          <Button style={navButtonStyle} onClick={toLogin} type="border">
            로그인
          </Button>
        </NavButtons>
      ) : (
        // 로그인 되어 있을 시
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
  z-index: 9999;
`;

const NavLogo = styled.div`
  & a {
    font-size: 26px;
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export default Navbar;
