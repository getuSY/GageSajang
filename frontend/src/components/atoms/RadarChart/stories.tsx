import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RadarChart from './';

const data = {
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
  title: 'atoms/RadarChart',
  component: RadarChart,
} as ComponentMeta<typeof RadarChart>;

export const defaultTheme: ComponentStory<typeof RadarChart> = () => (
  <RadarChart data={data} />
);
