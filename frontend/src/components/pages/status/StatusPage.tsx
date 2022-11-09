import React, { useState } from 'react';
import styled from 'styled-components';
import areas from '../../../data/areaGu.json';
import GeometryMap from '../../organisms/GeometryMap';
import StatusSideBar from '../../organisms/StatusSideBar';
import Transitions from '../../atoms/Transition';
import StatusReport from '../../organisms/StatusReport';
import {
  faPeopleGroup,
  faHouse,
  faShop,
  faDoorOpen,
  faDoorClosed,
  faCashRegister,
} from '@fortawesome/free-solid-svg-icons';

const content = ['유동인구', '거주인구', '점포 수', '개업률', '폐업률', '매출'];
const icons = [
  faPeopleGroup,
  faHouse,
  faShop,
  faDoorOpen,
  faDoorClosed,
  faCashRegister,
];

const StatusPage = () => {
  const [sideBarStatus, setSideBarStatus] = useState<boolean>(true);
  const [reportModal, setReportModal] = useState<boolean>(false); // 분석 상세 모달 열고 닫기
  const [category, setCategory] = useState<string>('main'); // 카테고리 : 상권 / 상권 배후지
  const [tab, setTab] = useState<number>(1); // category별 버튼, 순서 : content
  const [region, setRegion] = useState<string>(''); // 현재 선택한 구 이름

  const contentList = content.map((e: string, i: number) => ({
    name: e,
    onClick: () => setTab(i + 1),
  }));

  const onClickLabelHandler = (category: string) => {
    setCategory(category);
    setTab(1);
  };

  const onClickRegionHandler = (region: string) => {
    setRegion(region);
    setReportModal(true);
  };

  return (
    <Transitions>
      <Wrapper>
        <StatusSideBar
          sideBarStatus={sideBarStatus}
          setSideBarStatus={setSideBarStatus}
          contentList={contentList}
          category={category!}
          onClickLabelHandler={onClickLabelHandler}
          tab={tab}
        />
        <GeometryMap
          areas={areas.features}
          isOpen={sideBarStatus}
          onClickRegionHandler={onClickRegionHandler}
        />
        <StatusReport
          icon={icons}
          region={region}
          content={contentList}
          category={category!}
          tab={tab}
          // 상세 페이지, 모달 + close 버튼
          isOpen={reportModal} 
          setIsOpen={setReportModal}
        />
      </Wrapper>
    </Transitions>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default StatusPage;
