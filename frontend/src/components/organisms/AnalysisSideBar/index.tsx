import React, { useState } from 'react';
import styled from 'styled-components';
import BaseSideBar from '../../molecules/BaseSideBar';
import LabelInput from '../../molecules/LabelInput';
import ButtonInputs from '../../molecules/ButtonInputs';
import Button from '../../atoms/Button';
import Postcode from '../../atoms/Postcode';

const menuList = [
  { name: '요식업' },
  { name: '서비스업' },
  { name: '도소매업' },
];

interface AnalysisSideBarProps {
  map: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const AnalysisSideBar = ({ map, onChange }: AnalysisSideBarProps) => {
  return (
    <BaseSideBar title="🏪 상권 분석" open={false}>
      <Wrapper>
        <LabelInput
          label="📌 주소 입력"
          placeholder="주소를 입력하세요."
          onChange={onChange}
        />
        <ButtonInputs label="🍴 업종 선택" menuList={menuList} />
      </Wrapper>
      <Postcode map={map} />
      <Button
        type="blur"
        style={{ width: '100%', fontSize: '1.4rem', fontWeight: '900' }}
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
