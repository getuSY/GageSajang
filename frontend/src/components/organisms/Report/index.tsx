import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ReportSideBar from '../../molecules/ReportSideBar';
import ReportContent from '../../atoms/ReportContent';
import Label from '../../atoms/Label';
import ReportContentContainer from '../../molecules/ReportContentContainer';

interface ReportProps {
  jobName: string;
  dongName?: string;
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

const Report = ({ jobName, dongName }: ReportProps) => {
  const contentRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => console.log(contentRefs), [contentRefs]);
  return (
    <Wrapper>
      <ReportSideBar
        jobName={jobName}
        dongName={dongName}
        reportMenuList={reportMenuList}
        contentRefs={contentRefs}
      />
      <ReportContentContainer
        reportMenuList={reportMenuList}
        contentRefs={contentRefs}
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
