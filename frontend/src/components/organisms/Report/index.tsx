import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import ReportSideBar from '../../molecules/ReportSideBar';
import ReportContentContainer from '../ReportContentContainer';

interface ReportProps {
  jobName: string;
  dongName?: string;
  amatuerResult: any;
  isLoading: boolean;
}

const reportMenuList = [
  {
    name: '업종 분석',
    icon: 'shop',
  },

  {
    name: '매출 분석',
    icon: 'chart-line',
  },
  {
    name: '유동 인구',
    icon: 'people-group',
  },
  {
    name: '점포 수',
    icon: 'cash-register',
  },
  {
    name: '상권 배후지',
    icon: 'house-circle-check',
  },
];

const Report = ({
  jobName,
  dongName,
  amatuerResult,
  isLoading,
}: ReportProps) => {
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
      {!isLoading && (
        <ReportContentContainer
          reportMenuList={reportMenuList}
          contentRefs={contentRefs}
          setTab={setTab}
          amatuerResult={amatuerResult}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-grow: 1;
  gap: 2px;
  display: flex;
  padding: 0 0px;
  height: 100%;
`;

export default Report;
