import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReportSummary from './';

export default {
  title: 'atoms/ReportSummary',
  component: ReportSummary,
} as ComponentMeta<typeof ReportSummary>;

export const reportSummary: ComponentStory<typeof ReportSummary> = () => (
  <ReportSummary>
    <div>매출이 가장 높은 요일은 금요일 입니다.</div>
    <div>유동인구가 가장 많은 시간대는 2시~6시 입니다.</div>
    <div>지금은 2022년 11월 04일 12시 12분 입니다.</div>
  </ReportSummary>
);
