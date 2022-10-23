import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Spinner from './';

export default {
  title: 'atoms/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

export const defaultTheme: ComponentStory<typeof Spinner> = () => <Spinner />;
