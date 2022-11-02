import React from 'react';
import styled from 'styled-components';
import ButtonInputs from '../ButtonInputs';
interface StatusButtonsProps {}

const StatusButtons = ({}: StatusButtonsProps) => {
  const content = [
    { name: '유동인구' },
    { name: '거주인구' },
    { name: '점포 수' },
    { name: '개업률' },
    { name: '폐업률' },
    { name: '매출' },
  ];
  return (
    <Wrapper>
      <ButtonInputs label="상권 현황" menuList={content} />
      <ButtonInputs label="상권 배후지 현황" menuList={content} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default StatusButtons;
