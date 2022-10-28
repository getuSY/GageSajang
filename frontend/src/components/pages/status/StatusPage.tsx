import React, { useEffect } from 'react';
import styled from 'styled-components';
import areas from '../../../data/areaGu.json';
import GeometryMap from '../../organisms/GeometryMap';
import BaseSideBar from '../../molecules/BaseSideBar';

const StatusPage = () => {
  return (
    <Wrapper>
      <BaseSideBar title="상권 현황">칠드런이</BaseSideBar>
      <GeometryMap areas={areas.features} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default StatusPage;
