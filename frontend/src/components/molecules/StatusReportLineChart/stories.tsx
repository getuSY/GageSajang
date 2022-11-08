import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StatusReportLineChart from '.';

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
      label: '# of Votes', // 맨 위 범례
      data: [12, 19, 3, 5, 2, 3, 20], // 사용하는 데이터
      backgroundColor: '#92D7E0', // 라인 차트 기준 점 내부
      borderColor: '#92D7E0', // 라인 차트 기준 선 색
      borderWidth: 3, // 선 굵기
      datalabels: {
        // 차트 데이터 라벨 위치
        align: 'end',
        anchor: 'center',
      },
    },
  ],
};

const options = {
  plugins: {
    datalabels: {
      //   backgroundColor: function (context: any) {
      //     return context.dataset.backgroundColor;
      //   },
      backgroundColor: '#92D7E0',
      borderRadius: 4,
      color: 'white',
      font: {
        weight: 'bold',
      },
      //   formatter: Math.round,
      padding: 6,
    },
  },

  // Core options
  aspectRatio: 5 / 3,
  //   layout: {
  //     padding: {
  //       top: 32,
  //       right: 16,
  //       bottom: 16,
  //       left: 8,
  //     },
  //   },

  // 선 굵기 조절
  elements: {
    line: {
      //   fill: false,
      tension: 0.4,
    },
  },

  // 그래프 여러 줄로 겹치게 띄우는 속성
  //   scales: {
  //     y: {
  //       stacked: true,
  //     },
  //   },
};

export default {
  title: 'atoms/StatusReportLineChart',
  component: StatusReportLineChart,
} as ComponentMeta<typeof StatusReportLineChart>;

export const statusReportLineChart: ComponentStory<
  typeof StatusReportLineChart
> = () => (
  <StatusReportLineChart
    title={'좋은하루'}
    data={data}
    options={options}
  ></StatusReportLineChart>
);
