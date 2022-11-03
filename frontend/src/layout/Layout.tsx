import React, { Suspense, useEffect } from 'react';
import Navbar from '../components/organisms/NavBar';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { NavItem } from '../models/common';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '../api/user';
import { AnimatePresence } from 'framer-motion';
import HelpButton from '../components/atoms/HelpButton';
import { useHelloUser, useFetchUser } from '../hooks/user';

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
  // const query = useQuery(['user'], getUser);
  // const userInfo = query.data;
  const { data: userInfo } = useFetchUser();

  const test = useHelloUser('mok');
  useEffect(() => {
    console.log(test.data);
  }, [test]);

  return (
    <>
      <Navbar userInfo={userInfo} navList={navList} />
      <AnimatePresence exitBeforeEnter>
        <Wrapper>
          <Suspense fallback={<div />}>
            <Outlet />
          </Suspense>
          <HelpButton />
        </Wrapper>
      </AnimatePresence>
    </>
  );
};

const Wrapper = styled.div`
  padding-top: 65px;
`;

export default Layout;
