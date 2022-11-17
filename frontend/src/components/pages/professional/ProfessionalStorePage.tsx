import React, { useState, useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import LabelInput from '../../molecules/LabelInput';
import ProfessionalResult from '../../organisms/ProfessionalResult';
import { useProfessionalResult } from '../../../hooks/professional';
import { ProfessionalResultParams } from '../../../models/professional';
import Button from '../../atoms/Button';
import SimulationPage from './SimulationPage';
import { useProSalesSimulation } from '../../../hooks/simulation';
import Spinner from '../../atoms/Spinner';
import { usePostCode } from '../../../hooks/common';
import { cs1, cs2, cs3 } from '../../../data/cs';
import JobSearchInput from '../../molecules/JobSearchInput';
import { areas, DongItem } from '../../../data/areaDong';
import { useUserStoreInfo, useStoreInfoFix } from '../../../hooks/user';
import ProSideBar from '../../organisms/ProSideBar';

export interface ProfessionalStoreInfo extends ProfessionalResultParams {
  id: number;
}

const ProfessionalStorePage = () => {
  const userEmail = sessionStorage.getItem('email');
  const [inform, setInform] = useState<ProfessionalStoreInfo>({
    id: 0,
    email: userEmail,
    sales: 0,
    clerk: 0,
    area: 0,
    dongName: '',
    industryName: '',
  });
  const [content, setContent] = useState<number>(0);

  const userStoreInfo = useUserStoreInfo();
  useEffect(() => {
    console.log(userStoreInfo);
    if (userStoreInfo.isSuccess) {
      // console.log('맨처음 api 통신으로 가게 정보 확인', userStoreInfo);
      setInform(userStoreInfo.data);
      setContent(1);
    } else if (userStoreInfo.isError) {
      console.log('정보 없음');
    }
  }, [userStoreInfo]);

  return (
    <Wrapper
    // onClick={(e) => {
    //   if (!jobSearchResultRef.current.contains(e.target)) {
    //     setIsJobSearchResultOpen(false);
    //   }
    // }}
    >
      <ProSideBar info={inform} setInfo={setInform} setContent={setContent} />
      {/* {!userStoreInfo.isLoading && content === 0 && (
        <ProReport>
          <InitialReport>
            처음 뵙겠습니다, 사장님!<br></br>가게 정보를 입력하고 내 가게 분석을
            시작해봐요.
          </InitialReport>
        </ProReport>
      )}
      {!userStoreInfo.isLoading && content === 1 && (
        <ProReport>
          <InitialReport>
            사장님, 또 뵙네요! <br></br>이미 저장된 가게 정보가 있네요.
            <br></br>수정 없이 분석을 진행하시려면 분석하기 버튼을 눌러주세요.
          </InitialReport>
        </ProReport>
      )} */}
      {/* {!userStoreInfo.isLoading && result.isLoading && (
        <ProReport>
          분석 결과를 불러오는 중입니다. <br></br>잠시만 기다려주세요...
        </ProReport>
      )}
      {!userStoreInfo.isLoading && result.isSuccess && content === 2 && (
        <ProReport>
          <ProfessionalResult
            info={{
              email: inform.email,
              sales: inform.sales,
              clerk: inform.clerk,
              area: inform.area,
              dongName: inform.dongName,
              industryName: inform.industryName,
            }}
            result={result.data}
          />
          <SimulationPage></SimulationPage>
        </ProReport>
      )} */}
      <ProReport>
        <ProfessionalResult
          info={{
            email: inform.email,
            sales: inform.sales,
            clerk: inform.clerk,
            area: inform.area,
            dongName: inform.dongName,
            industryName: inform.industryName,
          }}
          // result={result.data}
        />
        <SimulationPage></SimulationPage>
      </ProReport>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 65px);
`;

const ProReport = styled.div`
  flex-grow: 1;
  height: 100%;
  overflow-y: scroll;
  left: 450px;
  /* background: #edf3f0; */
  background: white;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InitialReport = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  margin: auto;
`;

export default ProfessionalStorePage;
