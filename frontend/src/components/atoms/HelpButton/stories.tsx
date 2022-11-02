import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HelpButton from './';

export default {
  title: 'atoms/HelpButton',
  component: HelpButton,
} as ComponentMeta<typeof HelpButton>;

export const input: ComponentStory<typeof HelpButton> = () => <HelpButton />;
