import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckboxInput from './';

export default {
  title: 'atoms/CheckboxInput',
  component: CheckboxInput,
} as ComponentMeta<typeof CheckboxInput>;

export const defaultTheme: ComponentStory<typeof CheckboxInput> = () => (
  <CheckboxInput />
);
