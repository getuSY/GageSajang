import React, { useEffect, useState } from 'react';
import ReportModal from '../../atoms/ReportModal';
import styled from 'styled-components';
import StatusReportChart from '../../molecules/StatusReportChart';
import StatusReportIndex from '../../molecules/StatusReportIndex';
import StatusReportTitle from '../../molecules/StatusReportTitle';

interface StatusReportRPProps {
  region?: string;
  category: string;
  tab: number;
  title?: any;
}

const data = {
  labels: [
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
    '일요일',
  ],
  hoverOffset: 4,
  datasets: [
    {
      data: [12, 2, 9, 5, 10, 8, 5],

      backgroundColor: [
        '#799ECF',
        '#76A7D5',
        '#74B1D9',
        '#79BADB',
        '#80C4DD',
        '#88CEDF',
        '#93D7E9',
      ],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      font: {
        weight: 'bold',
      },
      color: 'green',
    },
  },
};

const StatusReportRP = ({
  region,
  category,
  tab,
  title,
}: StatusReportRPProps) => {
  return (
    <Wrapper>
      <StatusReportTitle
        // 상세 페이지 내용 //
        title={title}
      >
        <div className="summary-div">
          연평균 거주인구 수는 <span>32,000</span>명 입니다.
        </div>
        <div className="summary-div">
          성별은 <span>여성</span>의 비율이 더 높으며, 주 연령대는{' '}
          <span>60대 이상</span>입니다.
        </div>
        <div className="summary-div">
          연평균 가구 수는 <span>4,821</span>가구이며, 그 중 아파트의 비율은{' '}
          <span>91</span>%, 비아파트의 비율은
          <span>9</span>% 입니다.
        </div>
      </StatusReportTitle>
      <div className="report-top-div">
        <StatusReportChart
          type="bar"
          title={'유동인구 평균 성별 비(분기 기준)'}
          data={data}
          options={options}
        />
        <StatusReportChart
          type="doughnut"
          title={'분기별 평균 유동인구'}
          data={data}
          options={options}
        />
      </div>
      <div className="report-middle-div">
        <StatusReportChart
          type="polarArea"
          title={'연령별 평균 유동인구(분기 기준)'}
          data={data}
          options={options}
        />
        <StatusReportChart
          type="radar"
          title={'요일별 평균 유동인구(분기 기준)'}
          data={data}
          options={options}
        />
      </div>
      <StatusReportChart
        type="line"
        title={'시간대별 평균 유동인구(분기 기준)'}
        data={data}
        options={options}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 3000px;
  overflow-y: scroll;
  & .report-top-div {
    display: flex;
    gap: 2rem;
    width: 100%;
    & > div {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default StatusReportRP;
