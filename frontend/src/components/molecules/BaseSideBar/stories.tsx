import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BaseSideBar from './';

export default {
  title: 'molecules/BaseSideBar',
  component: BaseSideBar,
} as ComponentMeta<typeof BaseSideBar>;

export const baseSideBar: ComponentStory<typeof BaseSideBar> = () => (
  <BaseSideBar title="title" open={false}>
    {'{children}'}
  </BaseSideBar>
);
