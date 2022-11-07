import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ReportSideBar from '../../molecules/ReportSideBar';
import ReportContent from '../../atoms/ReportContent';
import Label from '../../atoms/Label';

interface ReportProps {
  jobName: string;
  dongName?: string;
}

const ReportMenuList = [
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
  return (
    <Wrapper>
      <ReportSideBar
        jobName={jobName}
        dongName={dongName}
        ReportMenuList={ReportMenuList}
      />
      <div className="report-content">
        <ReportContent style={{ background: '#FEFFCA', alignItems: 'center' }}>
          ❗ 아래 분석 결과는 통계에 따른 추정 결과입니다. 향후 상황에 따라 다를
          수 있기 때문에, 판단 하에 참고하여 활용하시기 바랍니다.
        </ReportContent>
        {ReportMenuList.map((menu, i) => (
          <ReportContent
            key={`report-menu-list-${i}`}
            style={{ height: '600px' }}
          >
            <Label>💸 {menu.name}</Label>
          </ReportContent>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-grow: 1;
  gap: 10px;
  display: flex;
  padding: 0 10px;
  height: 100%;

  & .report-content {
    flex-grow: 1;
    /* display: flex; */
    /* flex-direction: column; */
    /* gap: 10px; */
    overflow-y: scroll;

    & div + div {
      margin-top: 10px;
    }
  }
`;

export default Report;
