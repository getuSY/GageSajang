import React, { useState, useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import ProfessionalResult from '../../organisms/ProfessionalResult';
import { useProfessionalResult } from '../../../hooks/professional';
import { ProfessionalStoreInfo } from '../../../models/professional';

import Spinner from '../../atoms/Spinner';
import { useUserStoreInfo, useStoreInfoFix } from '../../../hooks/user';
import ProfessionalSideBar from '../../organisms/ProfessionalSideBar';

const ProfessionalStorePage = () => {
  const [storeInform, setStoreInform] = useState<ProfessionalStoreInfo>({
    id: 0,
    email: sessionStorage.getItem('email'),
    sales: 1,
    clerk: 0,
    area: 0,
    dongName: '',
    industryName: '',
  });
  const [submitStoreInform, setSubmitStoreInform] =
    useState<ProfessionalStoreInfo>({
      id: 0,
      email: sessionStorage.getItem('email'),
      sales: 1,
      clerk: 0,
      area: 0,
      dongName: '',
      industryName: '',
    });
  // 상태 구분 | 0: 가게정보 없음, 1: 가게정보 있음, 2: 로딩중, 3: 분석, -1: 서버 에러
  const [content, setContent] = useState<number>(-1);
  // API 요청에 보낼 데이터
  // 검색 결과 => 직업 이름
  const [selectedJobSearch, setSelectedJobSearch] =
    useState<string | undefined>(undefined);
  // 검색 결과 => 동 이름
  const [selectedDongSearch, setSelectedDongSearch] =
    useState<string | undefined>(undefined);
  const [clickTarget, setClickTarget] =
    useState<EventTarget | undefined>(undefined);
  // 지역 검색창
  const dongSearchResultRef = useRef<any>();
  const jobSearchResultRef = useRef<any>();

  const userStoreInfo = useUserStoreInfo();
  const mutationStoreInfoFix = useStoreInfoFix();
  const professionalResult = useProfessionalResult({
    ...submitStoreInform,
    dongName: selectedDongSearch,
    industryName: selectedJobSearch,
  });
  useEffect(() => {
    if (userStoreInfo.isSuccess) {
      // setStoreInform(userStoreInfo.data);
      setStoreInform({
        ...userStoreInfo.data,
        sales: userStoreInfo.data.sales / 3,
      });
      setSelectedDongSearch(userStoreInfo.data.dongName);
      setSelectedJobSearch(userStoreInfo.data.industryName);
      setContent(1);
    } else if (userStoreInfo.isError) {
      if (userStoreInfo.error.response?.status === 400) {
        setContent(0);
      } else {
        setContent(-1);
      }
    }
  }, [userStoreInfo.isSuccess, userStoreInfo.isError]);
  useEffect(() => {
    if (mutationStoreInfoFix.isSuccess) {
      setContent(2);
      setTimeout(() => setContent(3), 2000);
    }
  }, [mutationStoreInfoFix.isSuccess]);

  const onSubmitHandler = () => {
    const params: ProfessionalStoreInfo = {
      ...storeInform,
      sales: storeInform.sales * 3,
      dongName: selectedDongSearch,
      industryName: selectedJobSearch,
    };
    setSubmitStoreInform(params);
    mutationStoreInfoFix.mutate(params);
  };

  const changeStoreInform = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreInform({
      ...storeInform,
      [e.target.id]: Number(e.target.value),
    });
  };

  return (
    <Wrapper onClick={(e) => setClickTarget(e.target)}>
      <ProfessionalSideBar
        storeInform={storeInform}
        setStoreInform={setStoreInform}
        selectedDongSearch={selectedDongSearch}
        setSelectedDongSearch={setSelectedDongSearch}
        dongSearchResultRef={dongSearchResultRef}
        selectedJobSearch={selectedJobSearch}
        setSelectedJobSearch={setSelectedJobSearch}
        jobSearchResultRef={jobSearchResultRef}
        clickTarget={clickTarget}
        changeStoreInform={changeStoreInform}
        onSubmitHandler={onSubmitHandler}
      />
      {!userStoreInfo.isLoading && (
        <>
          {content === 0 && (
            <InitialReport>
              <img
                src="/mainIcon.png"
                alt="logo"
                className="initialReport-content-logo"
              />
              <div className="initialReport-content-div">
                <div>처음 뵙겠습니다, 사장님!</div>
                <div>
                  가게 정보를 입력하고 <span>내 가게 분석</span>을 시작해
                  보세요.
                </div>
              </div>
            </InitialReport>
          )}
          {content === 1 && (
            <InitialReport>
              <img
                src="/mainIcon.png"
                alt="logo"
                className="initialReport-content-logo"
              />
              <div className="initialReport-content-div">
                <div>이미 저장된 가게 정보가 있습니다.</div>
                <div>
                  수정 없이 분석을 진행하시려면 하단의{' '}
                  <span>내 가게 분석하기</span> 버튼을 눌러주세요.
                </div>
              </div>
            </InitialReport>
          )}
          {content === 2 && (
            <SpinnerDiv>
              <div style={{ position: 'absolute' }}>
                <Spinner />
              </div>
            </SpinnerDiv>
          )}
          {content === 3 && professionalResult.isSuccess && (
            <ProfessionalResult
              storeInfo={submitStoreInform}
              professionalResult={professionalResult.data}
            />
          )}
          {content === -1 && <InitialReport>서버가 아파요 ㅠㅠ</InitialReport>}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 65px);
`;

const InitialReport = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #f8f8f8;

  & .initialReport-content-logo {
    width: 15rem;
  }

  & .initialReport-content-div {
    margin-top: 3rem;
    text-align: center;
    font-family: 'GmarketSansMedium';
    font-size: 1.5rem;

    & span {
      background: ${({ theme }) => `${theme.gradColor}`};
      color: transparent;
      -webkit-background-clip: text;
      font-weight: 700;
      margin: 0px 6px;
    }
  }
`;
const SpinnerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;
`;

export default ProfessionalStorePage;
