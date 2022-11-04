import React from 'react';
import styled from 'styled-components';
import Report from '../../organisms/Report';

const AnalysisResultPage = () => {
  return (
    <Wrapper>
      <Report />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #eaeaea;
  width: 100%;
  padding-top: 10px;
  height: calc(100vh - 75px);
`;

export default AnalysisResultPage;
