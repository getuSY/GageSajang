import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DoubledBox from './index';

export default {
  title: 'molecules/DoubledBox',
  component: DoubledBox,
} as ComponentMeta<typeof DoubledBox>;

export const input: ComponentStory<typeof DoubledBox> = () => (
  <DoubledBox title="title test" />
);
