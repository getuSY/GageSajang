import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BubbleChart from '.';
import { greenTheme } from '../../../styles/theme';

// greenTheme.mainColor

const data = {
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

export default {
  title: 'atoms/BubbleChart',
  component: BubbleChart,
} as ComponentMeta<typeof BubbleChart>;

export const defaultTheme: ComponentStory<typeof BubbleChart> = () => (
  <BubbleChart data={data} />
);
