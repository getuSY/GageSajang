import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StatusReportBarChart from '.';

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
  hoverOffset: 10, // 마우스 호버했을 때 색상 진해짐?
  datasets: [
    {
      data: [12, 2, 9, 5, 10, 8, 5],
      backgroundColor: [
        '#92D7E0',
        '#88CEDF',
        '#80C4DD',
        '#79BADB',
        '#74B1D9',
        '#72A7D5',
        '#719ECF',
      ],
    },
  ],
  datalabels: {
    align: 'end',
    anchor: 'start',
  },
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      color: 'white',
      display: function (context: any) {
        return context.dataset.data[context.dataIndex] > 5;
      },
      font: {
        weight: 'bold',
      },
      formatter: function () {
        return 5;
      },
    },
  },
  aspectRatio: 5 / 3,
  layout: {
    padding: {
      top: 24,
      right: 16,
      bottom: 0,
      left: 8,
    },
  },
  elements: {
    line: {
      fill: false,
    },
    point: {
      hoverRadius: 7,
      radius: 5,
    },
  },
};

export default {
  title: 'atoms/StatusReportBarChart',
  component: StatusReportBarChart,
} as ComponentMeta<typeof StatusReportBarChart>;

export const statusReportBarChart: ComponentStory<typeof StatusReportBarChart> =
  () => (
    <StatusReportBarChart
      title={'좋은하루'}
      data={data}
      options={options}
    ></StatusReportBarChart>
  );
