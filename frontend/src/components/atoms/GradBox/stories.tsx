import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GradBox from './';

export default {
  title: 'atoms/GradBox',
  component: GradBox,
} as ComponentMeta<typeof GradBox>;

export const gradBox: ComponentStory<typeof GradBox> = () => <GradBox />;
