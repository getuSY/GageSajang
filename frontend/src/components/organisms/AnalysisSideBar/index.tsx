import React from 'react';
import styled from 'styled-components';
import BaseSideBar from '../../molecules/BaseSideBar';
import LabelInput from '../../molecules/LabelInput';
import ButtonInputs from '../../molecules/ButtonInputs';

const AnalysisSideBar = () => {
  return (
    <BaseSideBar title="🏪 상권 분석" buttonContent="상권 분석하러 가기">
      <Wrapper>
        <LabelInput label="📌주소 입력" placeholder="주소를 입력하세요." />
        <ButtonInputs label="🍴 업종 선택" />
      </Wrapper>
    </BaseSideBar>
  );
};

const Wrapper = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

export default AnalysisSideBar;
