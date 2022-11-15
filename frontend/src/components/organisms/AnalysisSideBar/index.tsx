import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import BaseSideBar from '../../molecules/BaseSideBar';
import LabelSearchInput from '../../molecules/LabelSearchInput';
import AnalysisMainButtons from '../../molecules/AnalysisMainButtons';
import Button from '../../atoms/Button';
import Label from '../../atoms/Label';
import AnalysisSubButtons from '../../molecules/AnalysisSubButtons';
import { useNavigate } from 'react-router-dom';
import { DongItem } from '../../../data/areaDong';

const menus = ['요식업', '서비스업', '도소매업'];

interface AnalysisSideBarProps {
  inputValue?: string;
  clearValue?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  searchResult?: Array<DongItem>;
  searchResultOpen: boolean;
  selectDong: any;
  searchResultRef: React.MutableRefObject<any>;
  mainCategory: number;
  subCategory: number;
  onClickAnlzButton: React.MouseEventHandler<HTMLButtonElement>;
  isResultLoading?: boolean;
}

const AnalysisSideBar = ({
  onChange,
  inputValue,
  clearValue,
  searchResult,
  searchResultOpen,
  selectDong,
  searchResultRef,
  mainCategory,
  subCategory,
  onClickAnlzButton,
  isResultLoading,
}: AnalysisSideBarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // 메인 -> 분석 페이지 시 사이드바 오픈
  useEffect(() => {
    if (mainCategory && subCategory) {
      setIsOpen(true);
    }
  }, [mainCategory, subCategory]);

  // 동 선택 됐을 때 사이드바 오픈
  useEffect(() => {
    if (inputValue) {
      setIsOpen(true);
    }
  }, [inputValue]);

  const navigate = useNavigate();

  const menuList = useMemo(
    () =>
      menus.map((e, i) => ({
        name: e,
        onClick: () => {
          if (mainCategory !== i + 1) {
            navigate(`/amatuer/analysis?mainCategory=${i + 1}`, {
              replace: true,
            });
          } else {
            navigate('/amatuer/analysis', { replace: true });
          }
        },
      })),
    [navigate, mainCategory]
  );

  return (
    <BaseSideBar
      title="🏪 상권 분석"
      // isOpen={isOpen}
      isOpen={true}
      setIsOpen={setIsOpen}
      toggleButton={false}
    >
      <Wrapper>
        <LabelSearchInput
          label="📌 주소 입력"
          placeholder="주소를 입력하세요."
          onChange={onChange}
          inputValue={inputValue}
          clearValue={clearValue}
          searchResult={searchResult}
          searchResultOpen={searchResultOpen}
          selectDong={selectDong}
          searchResultRef={searchResultRef}
        />
        <Label>🍴 업종 선택</Label>
        <AnalysisMainButtons menuList={menuList} tab={mainCategory} />
        {mainCategory ? (
          <>
            <Label>🍴 상세 선택</Label>
            <AnalysisSubButtons tab={mainCategory} subCategory={subCategory} />
          </>
        ) : null}
      </Wrapper>
      <Button
        type="blur"
        style={{ width: '100%', fontSize: '1.4rem', fontWeight: '900' }}
        disabled={
          !(mainCategory && subCategory && inputValue) || isResultLoading
        }
        onClick={onClickAnlzButton}
      >
        상권 분석하러 가기
      </Button>
    </BaseSideBar>
  );
};

const Wrapper = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 1.3rem;
`;

export default AnalysisSideBar;
