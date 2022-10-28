import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ShadowBox from './';

export default {
  title: 'atoms/ShadowBox',
  component: ShadowBox,
} as ComponentMeta<typeof ShadowBox>;

export const shadowBox: ComponentStory<typeof ShadowBox> = () => (
  <ShadowBox>ShadowBox</ShadowBox>
);
