import React, { Suspense } from 'react';
import Navbar from '../components/organisms/NavBar';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { User } from '../models/user';
import { NavItem } from '../models/common';

const navList: Array<NavItem> = [
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
  // dummy userInfo
  const userInfo: User = {
    username: '짱사장',
  };
  return (
    <>
      <Navbar userInfo={userInfo} navList={navList} />
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
