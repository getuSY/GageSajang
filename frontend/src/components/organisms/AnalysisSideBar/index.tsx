import React from 'react';
import styled from 'styled-components';
import BaseSideBar from '../../molecules/BaseSideBar';
import LabelInput from '../../molecules/LabelInput';
import ButtonInputs from '../../molecules/ButtonInputs';
import Label from '../../atoms/Label';

const menuList = [
  { name: '요식업' },
  { name: '서비스업' },
  { name: '도소매업' },
];

const AnalysisSideBar = () => {
  return (
    <BaseSideBar title="🏪 상권 분석" buttonContent="상권 분석하러 가기">
      <Wrapper>
        <LabelInput label="📌주소 입력" placeholder="주소를 입력하세요." />
        <ButtonInputs label="🍴 업종 선택" menuList={menuList} />
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
