import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Label from './';

export default {
  title: 'atoms/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

export const label: ComponentStory<typeof Label> = () => <Label>label</Label>;
