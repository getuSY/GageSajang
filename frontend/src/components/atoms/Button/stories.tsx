import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import {
  blueTheme,
  purpleTheme,
  greenTheme,
  orangeTheme,
} from '../../../styles/theme';

export default {
  title: 'atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const defaultTheme: ComponentStory<typeof Button> = () => (
  <Wrapper>
    <Button type="blur">blur</Button>
    <Button type="border">border</Button>
    <Button type="grad">grad</Button>
    <Button type="main">main</Button>
    <Button type="sub">sub</Button>
  </Wrapper>
);

export const blue: ComponentStory<typeof Button> = () => (
  <ThemeProvider theme={blueTheme}>
    <Wrapper>
      <Button type="blur">blur</Button>
      <Button type="border">border</Button>
      <Button type="grad">grad</Button>
      <Button type="main">main</Button>
      <Button type="sub">sub</Button>
    </Wrapper>
  </ThemeProvider>
);

export const green: ComponentStory<typeof Button> = () => (
  <ThemeProvider theme={greenTheme}>
    <Wrapper>
      <Button type="blur">blur</Button>
      <Button type="border">border</Button>
      <Button type="grad">grad</Button>
      <Button type="main">main</Button>
      <Button type="sub">sub</Button>
    </Wrapper>
  </ThemeProvider>
);

export const purple: ComponentStory<typeof Button> = () => (
  <ThemeProvider theme={purpleTheme}>
    <Wrapper>
      <Button type="blur">blur</Button>
      <Button type="border">border</Button>
      <Button type="grad">grad</Button>
      <Button type="main">main</Button>
      <Button type="sub">sub</Button>
    </Wrapper>
  </ThemeProvider>
);

export const orange: ComponentStory<typeof Button> = () => (
  <ThemeProvider theme={orangeTheme}>
    <Wrapper>
      <Button type="blur">blur</Button>
      <Button type="border">border</Button>
      <Button type="grad">grad</Button>
      <Button type="main">main</Button>
      <Button type="sub">sub</Button>
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
