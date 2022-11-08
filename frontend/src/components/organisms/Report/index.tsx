import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import ReportSideBar from '../../molecules/ReportSideBar';
import ReportContentContainer from '../../molecules/ReportContentContainer';

interface ReportProps {
  jobName: string;
  dongName?: string;
  amatuerResult: any;
}

const reportMenuList = [
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

const Report = ({ jobName, dongName, amatuerResult }: ReportProps) => {
  const contentRefs = useRef<HTMLDivElement[]>([]);
  const [tab, setTab] = useState<number>(0);

  return (
    <Wrapper>
      <ReportSideBar
        jobName={jobName}
        dongName={dongName}
        reportMenuList={reportMenuList}
        contentRefs={contentRefs}
        tab={tab}
        setTab={setTab}
      />
      <ReportContentContainer
        reportMenuList={reportMenuList}
        contentRefs={contentRefs}
        setTab={setTab}
        amatuerResult={amatuerResult}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-grow: 1;
  gap: 10px;
  display: flex;
  padding: 0 10px;
  height: 100%;
`;

export default Report;
