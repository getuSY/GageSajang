import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginBox from './';

export default {
  title: 'atoms/LoginBox',
  component: LoginBox,
} as ComponentMeta<typeof LoginBox>;

export const defaultTheme: ComponentStory<typeof LoginBox> = () => <LoginBox />;
