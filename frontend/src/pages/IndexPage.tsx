import React from 'react';
import styled from 'styled-components';
import IndexItem from '../components/common/organisms/IndexItem';

const IndexPage = () => {
  return (
    <Wrapper>
      <IndexItem />
      {/* <IndexItem /> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default IndexPage;
