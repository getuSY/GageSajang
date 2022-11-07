import React from 'react';
import styled from 'styled-components';
import Report from '../../organisms/Report';
import { useSearchParams } from 'react-router-dom';

const AmatuerAnalysisResultPage = () => {
  const [params] = useSearchParams();
  const admCd = params.get('admCd');
  const jobCd = params.get('jobCd');

  return (
    <Wrapper>
      <Report admCd={admCd} jobCd={jobCd} />
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

export default AmatuerAnalysisResultPage;
