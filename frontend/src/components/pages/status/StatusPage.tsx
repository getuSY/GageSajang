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
        <BaseSideBar title="🏪 상권 현황" open={true}>
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
  /* background-color: rgba(252, 252, 147, 0.3); */
  /* background-color: rgba(252, 214, 182, 0.5); */
  /* background-color: rgba(245, 121, 19, 0.2); */
`;

export default StatusPage;
