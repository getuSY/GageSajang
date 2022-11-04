import React, { useState } from 'react';
import styled from 'styled-components';
import ReportSidebarItem from '../../atoms/ReportSidebarItem';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChartLine,
  faShop,
  faCashRegister,
  faHouseCircleCheck,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faShop,
  faHouseCircleCheck,
  faChartLine,
  faCashRegister,
  faPeopleGroup
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
      <div className="title">🏪 상권 분석</div>
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
`;

export default ReportSideBar;
