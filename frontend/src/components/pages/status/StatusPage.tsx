import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import areas from '../../../data/areaGu.json';
import GeometryMap from '../../organisms/GeometryMap';
import StatusSideBar from '../../organisms/StatusSideBar';
import Transitions from '../../atoms/Transition';
import StatusReport from '../../organisms/StatusReport';
import {
  useStatusGuMap,
  useStatusHinGuMap,
  useStatusTrend,
} from '../../../hooks/status';
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
  const [tab, setTab] = useState<number>(0); // category별 버튼, 순서 : content
  const [region, setRegion] = useState<string>(''); // 현재 선택한 구 이름

  const contentList = content.map((e: string, i: number) => ({
    name: e,
    onClick: () => setTab(i),
  }));

  const onClickLabelHandler = (category: string) => {
    setCategory(category);
  };

  const onClickRegionHandler = (region: string) => {
    setRegion(region);
    setReportModal(true);
  };

  const { guData, isGuSuccess, isGuLoading, isGuError } = useStatusGuMap();
  const { hinGuData, isHinGuSuccess, isHinGuLoading, isHinGuError } =
    useStatusHinGuMap();

  // const { trendData, isTrendSuccess, isTrendLoading, isTrendError } = useStatusTrend();
  const trendData = {
    commercial: [
      // 입점 많은 상권 TOP10
      '강남역',
      '가산디지털단지',
      '발산역(마곡)',
      '홍대입구역(홍대)',
      '명동 남대문 북창동 다동 무교동 관광특구',
      '마곡역(마곡)',
      '문정역',
      '역삼역',
      '연남동(홍대)',
      '종로·청계 관광특구',
    ],
    sectors: [
      // 뜨는 업종 TOP10
      '한식음식점',
      '커피-음료',
      '분식전문점',
      '일반의류',
      '슈퍼마켓',
      '피부관리실',
      '미용실',
      '반찬가게',
      '양식음식점',
      '화장품',
    ],
    close: [
      // 폐점 많은 업종 TOP10
      '한식음식점',
      '일반의류',
      '커피-음료',
      '분식전문점',
      '호프-간이주점',
      '화장품',
      '슈퍼마켓',
      '미용실',
      '부동산중개업',
      '치킨전문점',
    ],
    salesDong: [
      // 매출높은 동네 TOP10
      '잠원동',
      '가양제3동',
      '신정7동',
      '이촌제1동',
      '이촌제2동',
      '삼성1동',
      '난향동',
      '세곡동',
      '성수1가제2동',
      '도곡2동',
    ],
    salesCS: [
      // 매출높은 업종 TOP10
      '한식음식점',
      '편의점',
      '의약품',
      '슈퍼마켓',
      '일반의원',
      '치과의원',
      '육류판매',
      '커피-음료',
      '일반의류',
      '분식전문점',
    ],
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
          trendData={trendData}
        />
        {isGuSuccess && isHinGuSuccess && (
          <>
            <GeometryMap
              areas={areas.features}
              isOpen={sideBarStatus}
              onClickRegionHandler={onClickRegionHandler}
              tab={tab}
              guData={guData}
              hinGuData={hinGuData}
              category={category}
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
          </>
        )}
      </Wrapper>
    </Transitions>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default StatusPage;
