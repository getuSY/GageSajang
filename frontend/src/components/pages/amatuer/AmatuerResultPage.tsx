import React from 'react';
import styled from 'styled-components';
import Report from '../../organisms/Report';
import { useSearchParams } from 'react-router-dom';
import getJobCode from '../../../utils/getJobCode';
import cs from '../../../data/cs';
import getDongName from '../../../utils/getDongName';
import { useAmatuerResult } from '../../../hooks/amatuer';

const AmatuerResultPage = () => {
  const [params] = useSearchParams();

  const mainCategory = params.get('mainCategory')
    ? parseInt(params.get('mainCategory')!)
    : 0;
  const subCategory = params.get('subCategory')
    ? parseInt(params.get('subCategory')!)
    : 0;
  const admCd = params.get('admCd') ? params.get('admCd')! : '';
  const dongName = getDongName(admCd);
  const jobCode = getJobCode(mainCategory, subCategory); // csX000XX
  const jobName = cs[mainCategory - 1][subCategory - 1];
  const { data: amatuerResult } = useAmatuerResult({ admCd, jobCode });

  return (
    <Wrapper>
      <Report
        jobName={jobName}
        dongName={dongName}
        amatuerResult={amatuerResult}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #eaeaea;
  width: 100%;
  justify-content: center;
  padding-top: 10px;
  height: calc(100vh - 75px);
`;

export default AmatuerResultPage;
