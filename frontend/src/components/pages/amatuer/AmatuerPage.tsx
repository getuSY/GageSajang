import React from 'react';
import styled from 'styled-components';
import Transitions from '../../atoms/Transition';
import PageIndexItem from '../../organisms/PageIndexItem';

const AmatuerPage = () => {
  return (
    <Transitions>
      <Wrapper>
        <PageIndexItem type="ama" />
      </Wrapper>
    </Transitions>
  );
};

const Wrapper = styled.div``;

export default AmatuerPage;
