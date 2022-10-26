import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginBox from './';

export default {
  title: 'organisms/LoginBox',
  component: LoginBox,
} as ComponentMeta<typeof LoginBox>;

export const loginBox: ComponentStory<typeof LoginBox> = () => <LoginBox />;
