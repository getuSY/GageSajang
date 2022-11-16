import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Spinner from '../../atoms/Spinner';
import ReportSideBar from '../../molecules/ReportSideBar';
import ReportContentContainer from '../AmatuerReportContentContainer';

interface ReportProps {
  jobName: string;
  dongName?: string;
  amatuerResult: any;
  amatuerSimulation: any;
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
  {
    name: '창업 위험도',
    icon: 'house-circle-check',
  },
];

const Report = ({
  jobName,
  dongName,
  amatuerResult,
  amatuerSimulation,
}: ReportProps) => {
  const contentRefs = useRef<HTMLDivElement[]>([]);
  const [tab, setTab] = useState<number>(0);
  console.log(amatuerSimulation);

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
      {!amatuerResult.isLoading &&
        amatuerResult.isSuccess &&
        amatuerSimulation.isSuccess && (
          <ReportContentContainer
            contentRefs={contentRefs}
            setTab={setTab}
            amatuerResult={amatuerResult.data}
            amatuerSimulation={amatuerSimulation}
            dongName={dongName}
            jobName={jobName}
          />
        )}
      {!amatuerResult.isLoading && amatuerResult.isError && (
        <LodingErrorWrapper>
          <h1>서버가 아파요,,,</h1>
        </LodingErrorWrapper>
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

const LodingErrorWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Report;
