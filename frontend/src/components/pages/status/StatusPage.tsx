import React, { useState } from 'react';
import styled from 'styled-components';
import areas from '../../../data/areaGu.json';
import GeometryMap from '../../organisms/GeometryMap';
import BaseSideBar from '../../molecules/BaseSideBar';
import StatusTrend from '../../molecules/StatusTrend';
import StatusButtons from '../../molecules/StatusButtons';
import Transitions from '../../atoms/Transition';

const content = ['유동인구', '거주인구', '점포 수', '개업률', '폐업률', '매출'];

const StatusPage = () => {
  const [sideBarStatus, setSideBarStatus] = useState<boolean>(false);
  const [category, setCategory] = useState<string>('main');
  const [tab, setTab] = useState<number>(1);

  const contentList = content.map((e: string, i: number) => ({
    name: e,
    onClick: () => setTab(i + 1),
  }));

  const onClickLabelHandler = (category: string) => {
    setCategory(category);
    setTab(1);
  };
  return (
    <Transitions>
      <Wrapper>
        <BaseSideBar
          title="상권 현황"
          open={true}
          statusmark={true}
          setStatus={setSideBarStatus}
        >
          <div>서울시 행정구 기준</div>
          <StatusTrend />
          <StatusButtons
            content={contentList}
            category={category!}
            onClickLabelHandler={onClickLabelHandler}
            tab={tab}
          />
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
