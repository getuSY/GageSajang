import React from 'react';
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
  faCircleExclamation,
  faSquarePollVertical,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faShop,
  faHouseCircleCheck,
  faChartLine,
  faCashRegister,
  faPeopleGroup,
  faLocationDot,
  faStore,
  faCircleExclamation,
  faSquarePollVertical
);

interface ReportSideBarProps {
  jobName: string;
  dongName?: string;
  reportMenuList: Array<{ name: string; icon: string }>;
  contentRefs: React.MutableRefObject<HTMLDivElement[]>;
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
}

const ReportSideBar = ({
  jobName,
  dongName,
  reportMenuList,
  contentRefs,
  tab,
  setTab,
}: ReportSideBarProps) => {
  return (
    <Wrapper>
      <div className="title">🏪 상권 분석</div>
      <div className="info-div">
        <div className="report-location">
          <div className="sub-title-icon">
            <FontAwesomeIcon icon="location-dot" />
          </div>
          {dongName}
        </div>
        <div className="report-category">
          <div className="sub-title-icon">
            <FontAwesomeIcon icon="store" />
          </div>
          {jobName}
        </div>
      </div>
      {reportMenuList.map((e, i) => (
        <ReportSidebarItem
          key={`report-sidebar-item-${i + 1}`}
          content={e}
          select={i === tab}
          onClick={() => {
            contentRefs.current[i].scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: auto;
  background: #ffffff;
  padding: 20px;
  width: 230px;
  flex-shrink: 0;
  color: #3e4b5b;
  @media screen and (max-width: 1200px) {
    display: none;
  }
  & .title {
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-weight: 700;
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
    font-size: 1.05rem;
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
