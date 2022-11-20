import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Label from '../../atoms/Label';
import Input from '../../atoms/Input';
import JobSearchInput from '../../molecules/JobSearchInput';
import Button from '../../atoms/Button';
import { ProfessionalStoreInfo } from '../../../models/professional';
import { areas, DongItem } from '../../../data/areaDong';
import { cs1, cs2, cs3 } from '../../../data/cs';

type ProfessionalSideBarProps = {
  storeInform: ProfessionalStoreInfo;
  setStoreInform: React.Dispatch<React.SetStateAction<ProfessionalStoreInfo>>;
  selectedDongSearch: string | undefined;
  setSelectedDongSearch: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
  dongSearchResultRef: React.MutableRefObject<HTMLDivElement>;
  selectedJobSearch: string | undefined;
  setSelectedJobSearch: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
  jobSearchResultRef: React.MutableRefObject<HTMLDivElement>;
  clickTarget: EventTarget | undefined;
  changeStoreInform: any;
  onSubmitHandler: any;
};

const ProfessionalSideBar = ({
  storeInform,
  setStoreInform,
  selectedDongSearch,
  setSelectedDongSearch,
  dongSearchResultRef,
  selectedJobSearch,
  setSelectedJobSearch,
  jobSearchResultRef,
  clickTarget,
  changeStoreInform,
  onSubmitHandler,
}: ProfessionalSideBarProps) => {
  // 업종 검색창
  const jobList = [...cs1, ...cs2, ...cs3];
  const [dongKeyword, setDongKeyword] = useState(''); // 주소 검색 input
  const [jobKeyword, setJobKeyword] = useState(''); // 업종검색 input
  const [isDongSearchResultOpen, setIsDongSearchResultOpen] =
    useState<boolean>(false);
  const [isJobSearchResultOpen, setIsJobSearchResultOpen] =
    useState<boolean>(false);
  const [dongSearchResult, setDongSearchResult] = useState<string[]>([]);
  const [jobSearchResult, setJobSearchResult] = useState<string[]>([]);

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

  // 업종 검색
  useEffect(() => {
    if (jobKeyword) {
      const tmp = jobList.filter((e: any, i) => e.includes(jobKeyword));
      setJobSearchResult(tmp);
      if (tmp.length > 0) {
        setIsJobSearchResultOpen(true);
      }
    }
  }, [jobKeyword]);
  const selectJobItem = useCallback((item: any) => {
    setSelectedJobSearch(item);
    setIsJobSearchResultOpen(false);
  }, []);
  const clearJobItem = useCallback(
    () => setSelectedJobSearch(undefined),
    [setSelectedJobSearch]
  );

  const selectDongItem = useCallback((item: any) => {
    setSelectedDongSearch(item);
    setIsDongSearchResultOpen(false);
  }, []);
  const clearDongItem = useCallback(
    () => setSelectedDongSearch(undefined),
    [setSelectedDongSearch]
  );

  const onDongChange = useCallback((e: any) => {
    setDongKeyword(e.target.value);
  }, []);

  const onJobChange = useCallback((e: any) => {
    setJobKeyword(e.target.value);
  }, []);

  useEffect(() => {
    if (!jobSearchResultRef.current.contains(clickTarget as Node)) {
      setIsJobSearchResultOpen(false);
      setJobSearchResult([]);
    }
    if (!dongSearchResultRef.current.contains(clickTarget as Node)) {
      setIsDongSearchResultOpen(false);
      setDongSearchResult([]);
    }
  }, [clickTarget]);

  return (
    <Wrapper>
      <ProList>
        <ProListItem>
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              margin: '10px 0 10px 0',
            }}
          >
            🏪 내 가게 정보
          </div>
        </ProListItem>
        <JobSearchInput
          label="가게 주소 (구, 동)"
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
        <ProListItem>
          <Label style={{ marginBottom: '0.6rem', fontSize: '1.05rem' }}>
            직원 수 (명)
          </Label>
          <Input
            placeholder="직원 수를 입력해주세요. (숫자만)"
            inputId="clerk"
            onChange={changeStoreInform}
            inputValue={storeInform.clerk.toString()}
            type="number"
          />
        </ProListItem>
        <ProListItem>
          <Label style={{ marginBottom: '0.6rem', fontSize: '1.05rem' }}>
            가게 면적 (㎡)
          </Label>
          <Input
            placeholder="가게 면적을 입력해주세요. (숫자만)"
            inputId="area"
            onChange={changeStoreInform}
            inputValue={storeInform.area.toString()}
            type="number"
          />
        </ProListItem>
        <ProListItem>
          <Label style={{ marginBottom: '0.6rem', fontSize: '1.05rem' }}>
            평균 월 매출 (원)
          </Label>
          <Input
            placeholder="평균 월 매출을 입력해주세요. (숫자만)"
            inputId="sales"
            onChange={changeStoreInform}
            inputValue={storeInform.sales.toString()}
            type="number"
          />
        </ProListItem>
      </ProList>
      <Button
        type="border"
        style={{
          width: '100%',
        }}
        onClick={onSubmitHandler}
        disabled={
          !(
            selectedDongSearch &&
            selectedJobSearch &&
            storeInform.clerk &&
            storeInform.area &&
            storeInform.sales
          )
        }
      >
        내 가게 분석하기
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 270px;
  flex-shrink: 0;
  /* background: ${({ theme }) => theme.lightColor}; */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
  /* &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 10000;
    width: 2px;
    height: 100%;
    bottom: 0;
    background: linear-gradient(0deg, #f9f254 0%, #9ced80 43.75%, #49d0a8 100%);
  } */
`;

const ProList = styled.div`
  flex-grow: 1;
  color: #3e4b5b;
  & > div + div {
    margin-top: 1rem;
  }
`;

const ProListItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* margin-bottom: 10px; */
`;

export default ProfessionalSideBar;
