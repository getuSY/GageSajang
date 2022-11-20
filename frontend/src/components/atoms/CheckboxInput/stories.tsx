import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckboxInput from './';

export default {
  title: 'atoms/CheckboxInput',
  component: CheckboxInput,
} as ComponentMeta<typeof CheckboxInput>;

export const checkboxInput: ComponentStory<typeof CheckboxInput> = () => (
  <CheckboxInput />
);
