import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UnsetInput from './';
import { ThemeProvider } from 'styled-components';
import { greenTheme } from '../../../styles/theme';

export default {
  title: 'atoms/UnsetInput',
  component: UnsetInput,
} as ComponentMeta<typeof UnsetInput>;

export const unsetInput: ComponentStory<typeof UnsetInput> = () => (
  <ThemeProvider theme={greenTheme}>
    <UnsetInput placeholder="placeholder" />
  </ThemeProvider>
);
