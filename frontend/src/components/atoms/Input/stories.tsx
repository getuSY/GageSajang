import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './';

export default {
  title: 'atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const input: ComponentStory<typeof Input> = () => (
  <Input placeholder="placeholder" />
);
