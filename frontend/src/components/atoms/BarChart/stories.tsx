import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BarChart from '.';
import { greenTheme } from '../../../styles/theme';

// greenTheme.mainColor

const data = {
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

export default {
  title: 'atoms/BarChart',
  component: BarChart,
} as ComponentMeta<typeof BarChart>;

export const defaultTheme: ComponentStory<typeof BarChart> = () => (
  <BarChart data={data} />
);