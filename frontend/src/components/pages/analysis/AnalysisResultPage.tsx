import React from 'react';
import styled from 'styled-components';
import ReportTitle from '../../atoms/ReportTitle';
import Report from '../../organisms/Report';

const AnalysisResultPage = () => {
  return (
    <Wrapper>
      <ReportTitle>🏪 상권 현황</ReportTitle>
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
  height: calc(100vh - 80px);
`;

export default AnalysisResultPage;
