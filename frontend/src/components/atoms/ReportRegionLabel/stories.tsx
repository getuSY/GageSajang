import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReportRegionLabel from './';

export default {
  title: 'atoms/ReportRegionLabel',
  component: ReportRegionLabel,
} as ComponentMeta<typeof ReportRegionLabel>;

export const reportRegionLabel: ComponentStory<typeof ReportRegionLabel> =
  () => <ReportRegionLabel />;
