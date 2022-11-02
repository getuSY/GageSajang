import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BaseSideBarLabel from './';

export default {
  title: 'atoms/BaseSideBarLabel',
  component: BaseSideBarLabel,
} as ComponentMeta<typeof BaseSideBarLabel>;

export const label: ComponentStory<typeof BaseSideBarLabel> = () => (
  <BaseSideBarLabel active={true}>label</BaseSideBarLabel>
);
