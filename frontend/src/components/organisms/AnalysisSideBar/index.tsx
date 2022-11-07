import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import BaseSideBar from '../../molecules/BaseSideBar';
import LabelInput from '../../molecules/LabelInput';
import ButtonInputs from '../../molecules/ButtonInputs';
import Button from '../../atoms/Button';
import Label from '../../atoms/Label';
import AnalysisSubButtons from '../../molecules/AnalysisSubButtons';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

interface AnalysisSideBarProps {
  inputValue?: string;
  clearValue?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const AnalysisSideBar = ({
  onChange,
  inputValue,
  clearValue,
}: AnalysisSideBarProps) => {
  const [params] = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const mainCategory = params.get('mainCategory')
    ? parseInt(params.get('mainCategory')!)
    : 0;
  const subCategory = params.get('subCategory')
    ? parseInt(params.get('subCategory')!)
    : 0;
  const navigate = useNavigate();
  const menuList = useMemo(
    () => [
      {
        name: '요식업',
        onClick: () => {
          if (mainCategory !== 1) {
            navigate('/analysis?mainCategory=1', { replace: true });
          } else {
            navigate('/analysis', { replace: true });
          }
        },
      },
      {
        name: '서비스업',
        onClick: () => {
          if (mainCategory !== 2) {
            navigate('/analysis?mainCategory=2', { replace: true });
          } else {
            navigate('/analysis', { replace: true });
          }
        },
      },
      {
        name: '도소매업',
        onClick: () => {
          if (mainCategory !== 3) {
            navigate('/analysis?mainCategory=3', { replace: true });
          } else {
            navigate('/analysis', { replace: true });
          }
        },
      },
    ],
    [mainCategory, navigate]
  );
  const onClickAnlzButton = () => {
    const jobCode = `CS${mainCategory}000${subCategory
      .toString()
      .padStart(2, '0')}`;
    console.log(jobCode);
    navigate(`/loading?nextTo=/analysis/result`);
  };

  useEffect(() => {
    setIsOpen(inputValue ? true : false);
  }, [inputValue]);

  return (
    <BaseSideBar title="🏪 상권 분석" open={isOpen}>
      <Wrapper>
        <LabelInput
          label="📌 주소 입력"
          placeholder="주소를 입력하세요."
          onChange={onChange}
          inputValue={inputValue}
          clearValue={clearValue}
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
