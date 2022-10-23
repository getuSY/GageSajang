import React from 'react';
import styled from 'styled-components';
import IndexItemDescription from '../molecules/IndexItemDescription';

const IndexItem = () => {
  return (
    <Wrapper>
      <IndexItemDescription />
      <img src="assets/img/index_status.png" alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  & img {
    width: 675px;
    height: 675px;
  }
`;

export default IndexItem;
