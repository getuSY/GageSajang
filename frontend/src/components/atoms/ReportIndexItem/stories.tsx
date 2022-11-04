import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReportIndexItem from '.';

export default {
  title: 'atoms/ReportIndexItem',
  component: ReportIndexItem,
} as ComponentMeta<typeof ReportIndexItem>;

export const reportIndexItem: ComponentStory<typeof ReportIndexItem> = () => (
  <ReportIndexItem active={true} />
);
