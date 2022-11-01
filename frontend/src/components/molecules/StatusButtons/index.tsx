import React from 'react';
import styled from 'styled-components';
import ButtonInputs from '../ButtonInputs';
import { useNavigate } from 'react-router-dom';

interface StatusButtonsProps {
  mainContent: any;
  subContent: any;
}

const StatusButtons = ({ mainContent, subContent }: StatusButtonsProps) => {
  return (
    <Wrapper>
      <ButtonInputs label="상권 현황" menuList={mainContent} />
      <ButtonInputs label="상권 배후지 현황" menuList={subContent} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default StatusButtons;
