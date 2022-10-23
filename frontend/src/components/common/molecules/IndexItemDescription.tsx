import React from 'react';
import styled from 'styled-components';
import GradButton from '../atoms/GradButton';

const IndexItemDescription = () => {
  return (
    <Wrapper>
      <div className="title">상권 현황</div>
      <div className="content">서울시 머시기</div>
      <GradButton content={'보러가기'} status />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default IndexItemDescription;
