import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import StatusReportChart from '../../molecules/StatusReportChart';
import StatusReportTitle from '../../molecules/StatusReportTitle';
import { Chart as ChartJS } from 'chart.js';
import type { ChartData, ChartArea } from 'chart.js';

interface StatusReportFPProps {
  region?: string;
  category: string;
  tab: number;
  title?: any;
}

const createGradient = (ctx: CanvasRenderingContext2D, area: ChartArea) => {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  gradient.addColorStop(0, '#1406B4');
  gradient.addColorStop(0.362, '#0855F9');
  gradient.addColorStop(1, '#00D9FF');

  return gradient;
};

const StatusReportFP = ({
  region,
  category,
  tab,
  title,
}: StatusReportFPProps) => {
  const chartRef = useRef<ChartJS>();
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    labels: [
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
      '일요일',
    ],
    datasets: [
      {
        data: [12, 2, 9, 5, 10, 8, 5],
        backgroundColor: [
          '#76A7D5',
          '#76A7D5',
          '#74B1D9',
          '#79BADB',
          '#80C4DD',
          '#88CEDF',
          '#93D7E9',
        ],
      },
    ],
  });

  const genderRateData = {
    labels: ['여성', '남성'],
    datasets: [
      {
        data: [67, 33],
        hoverOffset: 4,
        backgroundColor: ['#799ECF', '#93D7E9'],
      },
    ],
  };

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
    datasets: [
      {
        data: [12, 2, 9, 5, 10, 8, 5],

        backgroundColor: [
          '#76A7D5',
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

  const genderRateOptions = {
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

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const newChartData = {
      ...chartData,
      datasets: chartData.datasets.map((dataset) => ({
        ...dataset,
        backgroundColor: [
          createGradient(chart.ctx, chart.chartArea),
          '#76A7D5',
        ],
      })),
    };
    setChartData(newChartData);
  }, [chartRef]);

  return (
    <Wrapper>
      <StatusReportTitle
        // 상세 페이지 내용 //
        title={title}
      >
        <div className="summary-div">
          분기별 평균 유동인구 수는 <span>32,000</span>명 입니다.
        </div>
        <div className="summary-div">
          성별은 <span>여성</span>의 비율이 더 높으며, 주 연령대는{' '}
          <span>60대 이상</span>입니다.
        </div>
        <div className="summary-div">
          분기는 <span>3분기</span>, 요일은 <span>월요일</span>, 시간대는{' '}
          <span>00~06시</span>에 유동인구가 가장 많습니다.
        </div>
      </StatusReportTitle>
      <div className="report-top-div">
        <StatusReportChart
          type="doughnut"
          title={'유동인구 평균 성별 비(분기 기준)'}
          data={genderRateData}
          options={genderRateOptions}
        />
        <StatusReportChart
          type="bar"
          title={'분기별 평균 유동인구'}
          data={chartData}
          options={options}
          chartRef={chartRef}
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

export default StatusReportFP;
