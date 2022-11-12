import React, { useState } from 'react';
import styled from 'styled-components';
import ReportSidebarItem from '../../atoms/ReportSidebarItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChartLine,
  faShop,
  faCashRegister,
  faHouseCircleCheck,
  faPeopleGroup,
  faLocationDot,
  faStore,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faShop,
  faHouseCircleCheck,
  faChartLine,
  faCashRegister,
  faPeopleGroup,
  faLocationDot,
  faStore
);
// <div className="icon-div"><FontAwesomeIcon icon={icon} /></div>
const arr = [
  {
    name: '매출 분석',
    icon: 'chart-line',
  },
  {
    name: '유동 인구',
    icon: 'people-group',
  },
  {
    name: '업종 분석',
    icon: 'shop',
  },
  {
    name: '점포 수',
    icon: 'cash-register',
  },
  {
    name: '부동산(임대료)',
    icon: 'house-circle-check',
  },
];

const ReportSideBar = () => {
  const [tab, setTab] = useState<number>(0);
  return (
    <Wrapper>
      <div className="title">🏪 내 가게 분석</div>
      <div className="info-div">
        <div className="report-location">
          <div className="sub-title-icon">
            <FontAwesomeIcon icon="location-dot" />
          </div>
          중구 소곡동
        </div>
        <div className="report-category">
          <div className="sub-title-icon">
            <FontAwesomeIcon icon="store" />
          </div>
          한식음식점
        </div>
      </div>
      {arr.map((e, i) => (
        <ReportSidebarItem
          key={`report-sidebar-item-${i + 1}`}
          content={e}
          select={i === tab}
          onClick={() => setTab(i)}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.lightColor};
  padding: 20px;
  font-size: 1.4rem;
  border-radius: 20px;
  width: 230px;
  color: white;
  & .title {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }
  & .icon-div {
    width: 30px;
    display: flex;
    justify-content: center;
    & svg {
      margin-right: 9px;
    }
  }
  & .info-div {
    margin: 1.2rem 0;
  }
  & .report-location,
  .report-category {
    font-size: 1.1rem;
    display: flex;
    margin-bottom: 6px;
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 26px;
    }
  }
`;

export default ReportSideBar;
