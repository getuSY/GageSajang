import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import areas from '../../../data/areaGu.json';
import GeometryMap from '../../organisms/GeometryMap';
import BaseSideBar from '../../molecules/BaseSideBar';
import StatusTrend from '../../molecules/StatusTrend';
import StatusButtons from '../../molecules/StatusButtons';
import Transitions from '../../atoms/Transition';
import { useNavigate, useParams } from 'react-router-dom';

const content = ['유동인구', '거주인구', '점포 수', '개업률', '폐업률', '매출'];

const StatusPage = () => {
  const [sideBarStatus, setSideBarStatus] = useState<boolean>(false);
  const navigate = useNavigate();
  const { params } = useParams();
  const mainContent = content.map((e: string, i: number) => ({
    name: e,
    onClick: () =>
      navigate(`/status?category=${'main'}&tab=${i + 1}`, { replace: true }),
  }));

  const subContent = content.map((e: string, i: number) => ({
    name: e,
    onClick: () =>
      navigate(`/status?category=${'sub'}&tab=${i + 1}`, { replace: true }),
  }));

  useEffect(() => {
    if (sideBarStatus) {
    }
  }, [sideBarStatus]);

  useEffect(() => {
    console.log(params);
  });

  return (
    <Transitions>
      <Wrapper>
        <BaseSideBar
          title="🏪 상권 현황"
          open={true}
          setStatus={setSideBarStatus}
        >
          <StatusTrend />
          <StatusButtons mainContent={mainContent} subContent={subContent} />
        </BaseSideBar>
        <GeometryMap areas={areas.features} isOpen={sideBarStatus} />
      </Wrapper>
    </Transitions>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default StatusPage;
