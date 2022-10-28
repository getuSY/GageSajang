import React, { useEffect } from 'react';
import styled from 'styled-components';
import areas from '../../../data/areaGu.json';
import GeometryMap from '../../organisms/GeometryMap';
import BaseSideBar from '../../molecules/BaseSideBar';
import StatusTrend from '../../molecules/StatusTrend';
import StatusButtons from '../../molecules/StatusButtons';
import Transitions from '../../atoms/Transition';

const StatusPage = () => {
  return (
    <Transitions>
      <Wrapper>
        <BaseSideBar title="🏪 상권 현황">
          <StatusTrend />
          <StatusButtons />
        </BaseSideBar>
        <GeometryMap areas={areas.features} />
      </Wrapper>
    </Transitions>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default StatusPage;
