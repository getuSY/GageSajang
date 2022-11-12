import React, { useState } from 'react';
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

const ProfessionalInfoPage = () => {
  const [storeInfo, setStoreInfo] = useState({
    email: 'string',
    storeName: 'string',
    sigungu: 'string', //행정동
    dongName: 'string', //법정동
    employee: 0, //직원수
    storeArea: 0, //면적
    storeTypeCode: 'string',
    sales: 'string',
  });
  const values = useProSalesSimulation();
  const mutation = useProfessionalResult();
  // const { data, isLoading, isSuccess, isError, error } = mutation;
  // const store = data.store;
  // // const sales = data.sales;
  // const status = data.status;

  // const changeStoreName = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setStoreInfo({
  //     ...storeInfo,
  //     [e.target.storeName]: e.target.value,
  //   });
  // };
  // const changeSigungu = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setStoreInfo({
  //     ...storeInfo,
  //     [e.target.sigungu]: e.target.value,
  //   });
  // };
  // const changeDongName = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setStoreInfo({
  //     ...storeInfo,
  //     [e.target.dongName]: e.target.value,
  //   });
  // };
  // const changeEmployee = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setStoreInfo({
  //     ...storeInfo,
  //     [e.target.id]: e.target.value,
  //   });
  // };
  // const changeStoreArea = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setStoreInfo({
  //     ...storeInfo,
  //     [e.target.id]: e.target.value,
  //   });
  // };
  // const changeSales = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setStoreInfo({
  //     ...storeInfo,
  //     [e.target.id]: e.target.value,
  //   });
  // };
  // const changeBusiness = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setStoreInfo({
  //     ...storeInfo,
  //     [e.target.id]: e.target.value,
  //   });
  // };

  const [guDong, setGuDong] = useState('');
  const postCode = usePostCode(setGuDong);
  console.log(guDong);

  return (
    <Wrapper>
      <ProSide>
        <ProList>
          <ProListItem>
            <LabelInput
              label="가게 이름"
              placeholder="가게 이름을 입력해주세요."
              // onChange={changeStoreName}
            />
          </ProListItem>
          {/* <ProListItem>
            <LabelInput
              label="가게 시군구"
              placeholder="시군구를 입력해주세요."
              // onChange={changeSigungu}
            />
          </ProListItem>
          <ProListItem>
            <LabelInput
              label="가게 행정동"
              placeholder="행정동을 입력해주세요."
              // onChange={changeDongName}
            />
          </ProListItem> */}
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
            <LabelInput
              label="업종"
              placeholder="가게 업종을 입력해주세요."
              // onChange={changeBusiness}
            />
          </ProListItem>
          <ProListItem>
            <LabelInput
              label="직원 수"
              placeholder="직원 수를 입력해주세요."
              // onChange={changeEmployee}
            />
          </ProListItem>
          <ProListItem>
            <LabelInput
              label="가게 면적"
              placeholder="가게 면적을 입력해주세요."
              // onChange={changeStoreArea}
            />
          </ProListItem>
          <ProListItem>
            <LabelInput
              label="평균 월 매출"
              placeholder="평균 월 매출을 입력해주세요."
              // onChange={changeSales}
            />
          </ProListItem>
        </ProList>
        <Button
          type="blur"
          style={{ position: 'absolute', top: '85%', marginLeft: '70px' }}
        >
          내 가게 분석하기
        </Button>
      </ProSide>
      {mutation ? (
        <div>
          내 가게 경영 환경을 진단 중입니다...<br></br>
          <Spinner />
        </div>
      ) : (
        <div>나중에 api 연결 후 이 아랫부분을 여기에 넣어줄 예정..</div>
      )}
      <ProReport>
        <ProfessionalResultPage />
        {values ? <Spinner /> : <SimulationPage></SimulationPage>}
      </ProReport>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  // min-height: 100vh;
  /* overflow-x: hidden; */
  position: relative;
  width: 100%;
`;

const ProSide = styled.div`
  position: fixed;
  width: 400px;
  height: 100%;
  background: green;
  border-left: 10px solid green;
  transition: 0.5s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ProList = styled.ul`
  position: absolute;
  top: 0px;
  left: 0;
  width: 350px;
  padding-left: 20px;
  margin: 0;

  & li:nth-child(1) {
    margin-bottom: 40px;
    pointer-events: none;
  }

  & li:hover {
    background: white;
    color: black;
  }
`;

const ProListItem = styled.li`
  position: relative;
  width: 100%;
  list-style: none;
  color: white;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  margin-bottom: 10px;
`;

const ProReport = styled.div`
  position: absolute;
  width: calc(100% - 500px);
  left: 450px;
  min-height: 100vh;
  background: white;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ProfessionalInfoPage;
