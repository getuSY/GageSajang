import React from 'react';
import styled from 'styled-components';
import NavItems from '../../molecules/NavItems';
import NavUserInfo from '../../molecules/NavUserInfo';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button';
import { useNavigate } from 'react-router-dom';
import { NavItem } from '../../../models/common';
import { useUserInfo } from '../../../hooks/user';

interface NavbarProps {
  navList: Array<NavItem>;
}

const navButtonStyle = { width: '120px', height: '44px', fontSize: '1rem' };

const Navbar = ({ navList }: NavbarProps) => {
  const navigate = useNavigate();
  const { data: userInfo, isLoading } = useUserInfo();
  const toLogin = () => {
    navigate('/user/login');
  };
  const toRegister = () => {
    navigate('/user/register');
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
      {!userInfo && !isLoading && (
        <NavButtons>
          <Button style={navButtonStyle} onClick={toRegister} type="grad">
            회원가입
          </Button>
          <Button style={navButtonStyle} onClick={toLogin} type="border">
            로그인
          </Button>
        </NavButtons>
      )}
      {userInfo && !isLoading && <NavUserInfo userInfo={userInfo} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 65px;
  background-color: #ffffff;
  /* background: ${({ theme }) => theme.gradColor}; */
  /* padding: 0 200px; */
  padding: 0px max(80px, calc((100vw - 1500px) / 2));
  z-index: 9999;
  box-shadow: 0px 0.5px 4px rgba(0, 0, 0, 0.1);
`;

const NavLogo = styled.div`
  & a {
    font-size: 1.5rem;
    font-family: 'GmarketSansMedium';
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export default Navbar;
