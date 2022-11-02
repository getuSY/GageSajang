import React, { Suspense } from 'react';
import Navbar from '../components/organisms/NavBar';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { NavItem } from '../models/common';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '../api/user';
import { AnimatePresence } from 'framer-motion';

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
  const query = useQuery(['user'], getUser);
  const userInfo = query.data;

  return (
    <>
      <Navbar userInfo={userInfo} navList={navList} />
      <AnimatePresence exitBeforeEnter>
        <Wrapper>
          <Suspense fallback={<div />}>
            <Outlet />
          </Suspense>
        </Wrapper>
      </AnimatePresence>
    </>
  );
};

const Wrapper = styled.div`
  padding-top: 80px;
`;

export default Layout;
