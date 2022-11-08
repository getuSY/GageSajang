import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import BaseSideBar from '../../molecules/BaseSideBar';
import LabelSearchInput from '../../molecules/LabelSearchInput';
import ButtonInputs from '../../molecules/ButtonInputs';
import Button from '../../atoms/Button';
import Label from '../../atoms/Label';
import AnalysisSubButtons from '../../molecules/AnalysisSubButtons';
import { useNavigate } from 'react-router-dom';
import { DongItem } from '../../../data/areaDong';

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
}: AnalysisSideBarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (mainCategory && subCategory) {
      setIsOpen(true);
    }
  }, [mainCategory, subCategory]);
  useEffect(() => {
    if (inputValue) {
      setIsOpen(true);
    }
  }, [inputValue]);

  const navigate = useNavigate();
  const menuList = useMemo(
    () => [
      {
        name: '요식업',
        onClick: () => {
          if (mainCategory !== 1) {
            navigate('/amatuer/analysis?mainCategory=1', { replace: true });
          } else {
            navigate('/amatuer/analysis', { replace: true });
          }
        },
      },
      {
        name: '서비스업',
        onClick: () => {
          if (mainCategory !== 2) {
            navigate('/amatuer/analysis?mainCategory=2', { replace: true });
          } else {
            navigate('/amatuer/analysis', { replace: true });
          }
        },
      },
      {
        name: '도소매업',
        onClick: () => {
          if (mainCategory !== 3) {
            navigate('/amatuer/analysis?mainCategory=3', { replace: true });
          } else {
            navigate('/amatuer/analysis', { replace: true });
          }
        },
      },
    ],
    [mainCategory, navigate]
  );

  return (
    <BaseSideBar title="🏪 상권 분석" isOpen={isOpen} setIsOpen={setIsOpen}>
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
        <ButtonInputs menuList={menuList} tab={mainCategory} />
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
        disabled={!(mainCategory && subCategory && inputValue)}
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
