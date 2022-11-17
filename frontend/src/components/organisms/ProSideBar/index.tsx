import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import JobSearchInput from '../../molecules/JobSearchInput';
import { areas, DongItem } from '../../../data/areaDong';
import Spinner from '../../atoms/Spinner';
import { cs1, cs2, cs3 } from '../../../data/cs';
import LabelInput from '../../molecules/LabelInput';
import { ProfessionalStoreInfo } from '../../pages/professional/ProfessionalStorePage';
import { useStoreInfoFix } from '../../../hooks/user';

interface ProSideBarProps {
  info: ProfessionalStoreInfo;
  setInfo: (params: ProfessionalStoreInfo) => ProfessionalStoreInfo | void;
  setContent: (params: number) => number | void;
}

const ProSideBar = ({ info, setInfo, setContent }: ProSideBarProps) => {
  // const [guDong, setGuDong] = useState('');

  // 업종 검색창
  const jobList = [...cs1, ...cs2, ...cs3];
  const [jobKeyword, setJobKeyword] = useState(''); // 검색 input
  const [isJobSearchResultOpen, setIsJobSearchResultOpen] =
    useState<boolean>(false);
  const [jobSearchResult, setJobSearchResult] = useState<string[]>([]);
  const jobSearchResultRef = useRef<any>();
  // API 요청에 보낼 데이터
  const [selectedJobSearch, setSelectedJobSearch] =
    useState<string | undefined>(undefined); // 검색 결과 => 직업 이름

  useEffect(() => {
    if (jobKeyword) {
      const tmp = jobList.filter((e: any, i) => e.includes(jobKeyword));
      setJobSearchResult(tmp);
      if (tmp.length > 0) {
        setIsJobSearchResultOpen(true);
      }
    }
  }, [jobKeyword]);

  const onJobChange = useCallback((e: any) => {
    setJobKeyword(e.target.value);
  }, []);

  const selectJobItem = useCallback((item: any) => {
    setSelectedJobSearch(item);
    console.log(item);
    setIsJobSearchResultOpen(false);
  }, []);
  const clearJobItem = useCallback(
    () => setSelectedJobSearch(undefined),
    [setSelectedJobSearch]
  );

  // 지역 검색창
  const [dongKeyword, setDongKeyword] = useState(''); // 검색 input
  const [isDongSearchResultOpen, setIsDongSearchResultOpen] =
    useState<boolean>(false);
  const [dongSearchResult, setDongSearchResult] = useState<string[]>([]);
  const dongSearchResultRef = useRef<any>();
  // API 요청에 보낼 데이터
  const [selectedDongSearch, setSelectedDongSearch] =
    useState<string | undefined>(undefined); // 검색 결과 => 직업 이름

  const onDongChange = useCallback((e: any) => {
    setDongKeyword(e.target.value);
  }, []);

  const selectDongItem = useCallback((item: any) => {
    setSelectedDongSearch(item);
    console.log(item);
    setIsDongSearchResultOpen(false);
  }, []);
  const clearDongItem = useCallback(
    () => setSelectedDongSearch(undefined),
    [setSelectedDongSearch]
  );

  // 동 검색
  useEffect(() => {
    if (dongKeyword) {
      const tmp = areas
        .filter((e: DongItem, i) => e.name.includes(dongKeyword))
        .map((e: DongItem) => e.name);
      setDongSearchResult(tmp);
      if (tmp.length > 0) {
        setIsDongSearchResultOpen(true);
      }
    }
  }, [dongKeyword]);

  const [storeInform, setStoreInform] = useState<ProfessionalStoreInfo>(info);

  useEffect(() => {
    setStoreInform({
      ...info,
      dongName: selectedDongSearch?.split(' ')[1],
    });
  }, [selectedDongSearch]);

  useEffect(() => {
    setStoreInform({
      ...storeInform,
      industryName: selectedJobSearch,
    });
  }, [selectedJobSearch]);

  const changeStoreInform = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('change', e.target.value);
    setStoreInform({
      ...storeInform,
      [e.target.id]: Number(e.target.value),
    });
  };

  const mutation = useStoreInfoFix();
  const { data, isLoading, isSuccess, isError, error } = mutation;

  const onClickHandler = async () => {
    await setInfo(storeInform);
    await mutation.mutate(storeInform);
    if (isSuccess) {
      console.log(info);
    } else if (data === -1 || isError) {
      console.log('사이드바 에러', error);
    }
  };

  return (
    <Wrapper>
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
          <JobSearchInput
            label="가게 주소"
            placeholder="행정동을 입력해주세요."
            inputValue={selectedDongSearch}
            onChange={onDongChange}
            searchResult={dongSearchResult}
            searchResultOpen={isDongSearchResultOpen}
            searchResultRef={dongSearchResultRef}
            selectItem={selectDongItem}
            clearValue={clearDongItem}
          />
          <JobSearchInput
            label="업종"
            placeholder="가게 업종을 입력해주세요."
            inputValue={selectedJobSearch}
            onChange={onJobChange}
            searchResult={jobSearchResult}
            searchResultOpen={isJobSearchResultOpen}
            searchResultRef={jobSearchResultRef}
            selectItem={selectJobItem}
            clearValue={clearJobItem}
          />
        </ProListItem>
        <ProListItem>
          <LabelInput
            label="직원 수"
            placeholder="직원 수를 입력해주세요. (숫자만)"
            inputId="clerk"
            onChange={changeStoreInform}
            inputValue={storeInform.clerk.toString()}
          />
        </ProListItem>
        <ProListItem>
          <LabelInput
            label="가게 면적"
            placeholder="가게 면적을 입력해주세요. (숫자만)"
            onChange={changeStoreInform}
            inputId="area"
            inputValue={storeInform.area.toString()}
            // onChange={changeStoreArea}
          />
        </ProListItem>
        <ProListItem>
          <LabelInput
            label="평균 월 매출"
            placeholder="평균 월 매출을 입력해주세요. (숫자만)"
            onChange={changeStoreInform}
            inputId="sales"
            inputValue={storeInform.sales.toString()}
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

export default ProSideBar;
