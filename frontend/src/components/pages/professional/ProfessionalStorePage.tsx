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
import { useUserStoreInfo, useStoreInfoFix } from '../../../hooks/user';
import { number } from 'prop-types';

interface ProfessionalStoreInfo extends ProfessionalResultParams {
  id: number;
}

const ProfessionalStorePage = () => {
  const userEmail = sessionStorage.getItem('email');
  const [storeInform, setStoreInform] = useState<ProfessionalStoreInfo>({
    id: 0,
    email: userEmail,
    sales: 0,
    clerk: 0, //직원수
    area: 0, //면적
    dongName: '개포2동', //법정동
    industryName: '한식음식점',
  });
  const [content, setContent] = useState<number>(0);
  // const values = useProSalesSimulation();
  // const mutation = useProfessionalResult();

  // const onClickHandler = () => {
  //   mutation.mutate(storeInfo);
  // };
  const { data: storeInfo } = useUserStoreInfo();
  useEffect(() => {
    if (storeInfo) {
      // console.log('가게 정보 확인', storeInfo);
      setStoreInform(storeInfo);
      setContent(1);
    }
  }, []);

  // const mutation = useStoreInfoFix();
  // const { data, isLoading, isSuccess, isError, error } = mutation;

  const onClickHandler = () => {};

  const [guDong, setGuDong] = useState('');
  const postCode = usePostCode(setGuDong);

  // const changeStoreInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setStoreInfo({
  //     ...storeInfo,
  //     [e.target.storeName]: e.target.value,
  //   });
  // };

  // 업종 검색창
  const jobList = [...cs1, ...cs2, ...cs3];
  const [keyword, setKeyword] = useState(''); // 검색 input
  const [isSearchResultOpen, setIsSearchResultOpen] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<string[]>([]);
  const searchResultRef = useRef<any>();
  // API 요청에 보낼 데이터
  const [selectedSearch, setSelectedSearch] =
    useState<string | undefined>(undefined); // 검색 결과 => 직업 이름

  useEffect(() => {
    if (keyword) {
      const tmp = jobList.filter((e: any, i) => e.includes(keyword));
      setSearchResult(tmp);
      if (tmp.length > 0) {
        setIsSearchResultOpen(true);
      }
    }
  }, [keyword]);

  const onChange = useCallback((e: any) => {
    setKeyword(e.target.value);
  }, []);

  const selectItem = useCallback((item: any) => {
    setSelectedSearch(item);
    setIsSearchResultOpen(false);
  }, []);
  const clearItem = useCallback(() => setSelectedSearch(undefined), []);

  return (
    <Wrapper
      onClick={(e) => {
        if (!searchResultRef.current.contains(e.target)) {
          setIsSearchResultOpen(false);
        }
      }}
    >
      <ProSide>
        <ProList>
          <ProListItem>
            <div
              style={{
                fontSize: '40px',
                color: 'white',
                fontWeight: '500',
                margin: '10px 0 30px 0',
              }}
            >
              🏪 내 가게 정보
            </div>
          </ProListItem>
          <ProListItem>
            <LabelInput
              label="가게 주소"
              placeholder="행정동을 입력해주세요."
              inputValue={guDong}
              onClick={postCode}
              // onChange={changeDongName}
            />
          </ProListItem>
          <ProListItem>
            <JobSearchInput
              label="업종"
              placeholder="가게 업종을 입력해주세요."
              inputValue={selectedSearch}
              onChange={onChange}
              searchResult={searchResult}
              searchResultOpen={isSearchResultOpen}
              searchResultRef={searchResultRef}
              selectItem={selectItem}
              clearValue={clearItem}
            />
          </ProListItem>
          <ProListItem>
            <LabelInput
              label="직원 수"
              placeholder="직원 수를 입력해주세요. (숫자만)"
              // onChange={changeEmployee}
            />
          </ProListItem>
          <ProListItem>
            <LabelInput
              label="가게 면적"
              placeholder="가게 면적을 입력해주세요. (숫자만)"
              // onChange={changeStoreArea}
            />
          </ProListItem>
          <ProListItem>
            <LabelInput
              label="평균 월 매출"
              placeholder="평균 월 매출을 입력해주세요. (숫자만)"
              // onChange={changeSales}
            />
          </ProListItem>
        </ProList>
        <Button
          type="border"
          style={{
            width: '260px',
            alignSelf: 'center',
            margin: '10rem 0 0 0',
          }}
          onClick={onClickHandler}
        >
          내 가게 분석하기
        </Button>
      </ProSide>
      {content === 0 ? (
        <ProReport>
          <InitialReport>
            처음 뵙겠습니다, 사장님!<br></br>가게 정보를 입력하고 내 가게 분석을
            시작해봐요.
          </InitialReport>
        </ProReport>
      ) : content === 1 ? (
        <ProReport>
          <InitialReport>
            사장님, 또 뵙네요! <br></br>이미 저장된 가게 정보가 있네요.
            <br></br>수정 없이 분석을 진행하시려면 분석하기 버튼을 눌러주세요.
          </InitialReport>
        </ProReport>
      ) : (
        <ProReport>
          {/* <h1>ProReport</h1> */}
          <ProfessionalResult />
          {/* {values ? <Spinner /> : <SimulationPage></SimulationPage>} */}
          <SimulationPage></SimulationPage>
        </ProReport>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  // min-height: 100vh;
  /* overflow-x: hidden; */
  /* position: relative; */
  display: flex;
  width: 100%;
  height: calc(100vh - 65px);
`;

const ProSide = styled.div`
  /* position: fixed; */
  width: 400px;
  height: 100%;
  background: ${({ theme }) => theme.lightColor};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ProList = styled.div`
  padding: 20px;
`;

const ProListItem = styled.div`
  width: 100%;
  color: white;
  margin-bottom: 10px;
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

const CsInput = styled.input`
  max-width: 320px;
  width: 100%;
  height: 45px;
  font-weight: 900;
  font-size: 1rem;
  padding: 0 20px;
  background: #eaeaea;
  border: none;
  border-radius: 10px;
  outline: none;
  margin-top: 1.3rem;
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
