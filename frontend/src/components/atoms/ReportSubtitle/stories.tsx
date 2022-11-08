import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReportSubtitle from '.';

export default {
  title: 'atoms/ReportSubtitle',
  component: ReportSubtitle,
} as ComponentMeta<typeof ReportSubtitle>;

export const reportSubtitle: ComponentStory<typeof ReportSubtitle> = () => (
  <ReportSubtitle title={'성별 비율'}></ReportSubtitle>
);
