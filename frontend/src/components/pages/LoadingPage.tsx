import React from 'react';
import styled from 'styled-components';
import Spinner from '../atoms/Spinner';

const LoadingPage = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 135px);
  padding-bottom: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LoadingPage;
