import React from 'react';
import styled from 'styled-components';
import Transitions from '../../atoms/Transition';
import PageIndexItem from '../../organisms/PageIndexItem';

const ProfessionalPage = () => {
  return (
    <Transitions>
      <Wrapper>
        <PageIndexItem type="pro" />
      </Wrapper>
    </Transitions>
  );
};

const Wrapper = styled.div``;

export default ProfessionalPage;
