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
  const admCd = params.get('admCd') ? params.get('admCd')! : ''; // 행정동 코드
  const dongName = getDongName(admCd); // 동 이름
  const jobCode = getJobCode(mainCategory, subCategory); // 업종 코드 : CSX000XX
  const jobName = cs[mainCategory - 1][subCategory - 1]; // 업종명
  const {
    data: amatuerResult,
    isLoading,
    isSuccess,
    isError,
  } = useAmatuerResult({
    admCd,
    jobCode,
  });

  return (
    <Wrapper>
      <Report
        jobName={jobName}
        dongName={dongName}
        amatuerResult={amatuerResult}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  /* background: #eaeaea; */
  background: #f2edf3;
  width: 100%;
  justify-content: center;
  /* padding-top: 1px; */
  height: calc(100vh - 65px);
`;

export default AmatuerResultPage;
