import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StatusReportBarChart from '.';
import { greenTheme } from '../../../styles/theme';
import { redirect } from 'react-router-dom';

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
      //   label: {
      //     display: false,
      //   },
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

      //   labels: (context: any) => {
      //     const index = context.dataIndex;
      //     const value = context.dataset.data[index];
      //     return value == 12 ? '1분기' : index % 2 ? '2분기' : '3분기';
      //   },
      //   borderColor: [
      //     // greenTheme.mainColor,
      //     // 'rgba(54, 162, 235, 1)',
      //     // 'rgba(255, 206, 86, 1)',
      //     // 'rgba(75, 192, 192, 1)',
      //     // 'rgba(153, 102, 255, 1)',
      //     // 'rgba(255, 159, 64, 1)',
      //     '#92D7E0',
      //     '#88CEDF',
      //     '#80C4DD',
      //     '#79BADB',
      //     '#74B1D9',
      //     '#72A7D5',
      //     '#719ECF',
      //   ],
      //   borderWidth: 1,
    },
  ],

  //   backgroundColor: (context: any) => {
  //     const index = context.dataIndex;
  //     const value = context.dataset.data[index];
  //     return value == 12
  //       ? 'red' // draw negative values in red
  //       : index % 2
  //       ? 'blue' // else, alternate values in blue and green
  //       : 'green';
  //   },

  //   datasets: [
  //     {
  //       label: 'Net sales',
  //       data: [
  //         { x: 'Jan', net: 100, cogs: 50, gm: 50 },
  //         { x: 'Feb', net: 120, cogs: 55, gm: 75 },
  //       ],
  //       parsing: {
  //         yAxisKey: 'net',
  //       },
  //       backgroundColor: 'rgba(75, 192, 192, 1)',
  //     },
  //     {
  //       label: 'Cost of goods sold',
  //       data: [
  //         { x: 'Jan', net: 100, cogs: 50, gm: 50 },
  //         { x: 'Feb', net: 120, cogs: 55, gm: 75 },
  //       ],
  //       parsing: {
  //         yAxisKey: 'cogs',
  //       },
  //     },
  //     {
  //       label: 'Gross margin',
  //       data: [
  //         { x: 'Jan', net: 100, cogs: 50, gm: 50 },
  //         { x: 'Feb', net: 120, cogs: 55, gm: 75 },
  //       ],
  //       parsing: {
  //         yAxisKey: 'gm',
  //       },
  //     },
  //   ],

  //   labels: [
  //     '월요일',
  //     '화요일',
  //     '수요일',
  //     '목요일',
  //     '금요일',
  //     '토요일',
  //     '일요일',
  //   ],
  //   dataset: [
  //     {
  //       data: [16, 20, 10, 3, 4, 56, 39],
  //       backgroundColor: [
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(54, 162, 235, 1)',
  //       ],
  //     },
  //   ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: 'rgba(12, 13, 13, 1)',
            fontSize: 14,
          },
          gridLines: {
            color: 'rgba(87, 152, 23, 1)',
            lineWidth: 3,
          },
        },
      ],
    },
  },
  labels: {
    font: {
      family: 'GmarketSansMedium',
      size: 100,
    },
  },
  showLine: false,
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
