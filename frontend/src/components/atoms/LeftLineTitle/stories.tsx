import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LeftLineTitle from '.';

export default {
  title: 'atoms/LeftLineTitle',
  component: LeftLineTitle,
} as ComponentMeta<typeof LeftLineTitle>;

export const input: ComponentStory<typeof LeftLineTitle> = () => (
  <LeftLineTitle />
);
