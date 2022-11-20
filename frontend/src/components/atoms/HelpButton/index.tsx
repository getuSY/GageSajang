import React from 'react';
import styled from 'styled-components';

interface HelpButtonProps {}

const HelpButton = ({}: HelpButtonProps) => {
  return <Wrapper>?</Wrapper>;
};

const Wrapper = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  /* background-color: ${({ theme }) => theme.mainColor}; */
  background-color: #1ca37c;
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 48px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2); ;
`;

export default HelpButton;
