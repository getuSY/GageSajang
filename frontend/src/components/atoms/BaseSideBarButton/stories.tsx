import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BaseSideBarButton from './';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { blueTheme } from '../../../styles/theme';

export default {
  title: 'atoms/BaseSideBarButton',
  component: BaseSideBarButton,
} as ComponentMeta<typeof BaseSideBarButton>;

const Template: ComponentStory<typeof BaseSideBarButton> = (args) => (
  <BaseSideBarButton {...args} />
);

export const blue: ComponentStory<typeof BaseSideBarButton> = () => (
  <ThemeProvider theme={blueTheme}>
    <Wrapper>
      <BaseSideBarButton>border</BaseSideBarButton>
    </Wrapper>
  </ThemeProvider>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  & button {
    margin-left: 0;
  }
`;
