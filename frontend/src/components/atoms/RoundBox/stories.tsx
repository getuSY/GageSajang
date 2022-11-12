import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RoundBox from './';

export default {
  title: 'atoms/RoundBox',
  component: RoundBox,
} as ComponentMeta<typeof RoundBox>;

export const input: ComponentStory<typeof RoundBox> = () => <RoundBox />;
