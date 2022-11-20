import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReportModal from './';

export default {
  title: 'atoms/ReportModal',
  component: ReportModal,
} as ComponentMeta<typeof ReportModal>;

export const reportModal: ComponentStory<typeof ReportModal> = () => (
  <ReportModal />
);
