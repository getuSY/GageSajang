import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReportTitle from '.';

export default {
  title: 'atoms/ReportTitle',
  component: ReportTitle,
} as ComponentMeta<typeof ReportTitle>;

export const reportTitle: ComponentStory<typeof ReportTitle> = () => (
  <ReportTitle>유동인구</ReportTitle>
);
