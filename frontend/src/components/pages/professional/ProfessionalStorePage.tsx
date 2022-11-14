import React, { useState, useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import LabelInput from '../../molecules/LabelInput';
import ProfessionalResultPage from './ProfessionalResultPage';
import { useProfessionalResult } from '../../../hooks/professional';
import { ProfessionalResultParams } from '../../../models/professional';
import Button from '../../atoms/Button';
import SimulationPage from '../simulation/SimulationPage';
import { useProSalesSimulation } from '../../../hooks/simulation';
import Spinner from '../../atoms/Spinner';
import { usePostCode } from '../../../hooks/common';
import { cs1, cs2, cs3 } from '../../../data/cs';
import JobSearchInput from '../../molecules/JobSearchInput';

const ProfessionalInfoPage = () => {
  const userEmail = sessionStorage.getItem('email');
  const [storeInfo, setStoreInfo] = useState<ProfessionalResultParams>({
    email: userEmail,
    sales: 0,
    clerk: 0, //직원수
    area: 0, //면적
    dongName: '개포2동', //법정동
    industryName: '한식음식점',
  });
  const values = useProSalesSimulation();
  const mutation = useProfessionalResult();
  const { data } = mutation;
  // const store = data.store;
  // const sales = data.sales;
  // const status = data.status;

  const onClickHandler = () => {
    mutation.mutate(storeInfo);
  };
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
          {/* <ProListItem>
            <LabelInput
              label="업종"
              placeholder="가게 업종을 입력해주세요."
              // onChange={changeBusiness}
            />
          </ProListItem> */}
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
      <ProReport>
        {/* <h1>ProReport</h1> */}
        <ProfessionalResultPage />
        {values ? <Spinner /> : <SimulationPage></SimulationPage>}
      </ProReport>
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

export default ProfessionalInfoPage;
