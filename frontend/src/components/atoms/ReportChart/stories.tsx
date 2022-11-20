import React, { useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReportChart from '.';
import { greenTheme } from '../../../styles/theme';

const barData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 2, 9, 5, 10, 8],
      backgroundColor: [
        greenTheme.mainColor,
        greenTheme.subColor,
        greenTheme.gradColor,
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        greenTheme.mainColor,
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const bubbleData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [
        { x: 12, y: 1, r: 9 },
        { x: 2, y: 3, r: 15 },
        { x: 1, y: 1, r: 9 },
        { x: 4, y: 2, r: 20 },
        { x: 6, y: 5, r: 30 },
        { x: 9, y: 4, r: 25 },
      ],
      backgroundColor: [
        greenTheme.mainColor,
        greenTheme.subColor,
        greenTheme.gradColor,
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        greenTheme.mainColor,
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const doughnutData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      //   label:
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        greenTheme.mainColor,
        greenTheme.subColor,
        greenTheme.gradColor,
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        greenTheme.mainColor,
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const lineData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      //   label:
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        greenTheme.mainColor,
        greenTheme.subColor,
        greenTheme.gradColor,
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        greenTheme.mainColor,
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const radarData = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

export default {
  title: 'atoms/ReportChart',
  component: ReportChart,
} as ComponentMeta<typeof ReportChart>;

export const reportChart: ComponentStory<typeof ReportChart> = () => (
  <>
    <ReportChart type="bar" data={barData} />
    <ReportChart type="bubble" data={bubbleData} />
    <ReportChart type="doughnut" data={doughnutData} />
    <ReportChart type="line" data={lineData} />
    <ReportChart type="radar" data={radarData} />
  </>
);
