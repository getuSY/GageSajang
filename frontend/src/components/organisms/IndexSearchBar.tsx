import React from 'react';
import styled from 'styled-components';

const IndexSearchBar = () => {
  return (
    <Wrapper>
      <div className="search-bar">
        나<span>치킨집</span>할 건데 어디에 차리지?
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);

  & .search-bar {
    // font
    margin-bottom: 2.5rem;
    font-size: 5rem;
    font-weight: 800;
    line-height: 29px;
    font-family: 'nunito';
    font-style: normal;
    & span {
      font-family: 'nunito';
      background: ${({ theme }) => theme.gradColor};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin: 0 50px;
    }
  }
`;

export default IndexSearchBar;
