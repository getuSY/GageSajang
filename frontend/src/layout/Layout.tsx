import React, { Suspense } from 'react';
import Navbar from '../components/organisms/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const navList = [
  {
    content: '상권현황',
    linkTo: '/status',
  },
  {
    content: '상권분석',
    linkTo: '/analysis',
  },
  {
    content: '이미사장',
    linkTo: '/professional',
  },
  {
    content: '아마사장',
    linkTo: '/amatuer',
  },
];

const Layout = () => {
  const navigate = useNavigate();
  const toLogin = () => {
    navigate('/login');
  };
  const toRegister = () => {
    navigate('/register');
  };

  // dummy userInfo
  const userInfo = {
    username: '짱사장',
  };
  return (
    <>
      <Navbar
        navList={navList}
        toLogin={toLogin}
        toRegister={toRegister}
        userInfo={userInfo}
      />
      <Wrapper>
        <Suspense fallback={<div />}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding-top: 80px;
`;

export default Layout;
