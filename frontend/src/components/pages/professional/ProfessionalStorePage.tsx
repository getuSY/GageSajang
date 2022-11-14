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
import { cs1, cs2, cs3 } from '../../../data/cs';
import Label from '../../atoms/Label';

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
  console.log(data);

  const onClickHandler = () => {
    mutation.mutate(storeInfo);
  };
  const [guDong, setGuDong] = useState('');
  const postCode = usePostCode(setGuDong);
  console.log(guDong);

  // const changeStoreInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setStoreInfo({
  //     ...storeInfo,
  //     [e.target.storeName]: e.target.value,
  //   });
  // };
  const business = [...cs1, ...cs2, ...cs3];
  console.log(business);
  const csList = business.map((name, index) => <option value={name}></option>);
  return (
    <Wrapper>
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
          </ProListItem>
          <ProListItem>
            <div style={{ position: 'relative', width: '100%' }}>
              <Label>업종</Label>
              <CsInput
                placeholder="가게 업종을 입력해주세요."
                list="business"
              />
              <datalist id="business">{csList}</datalist>
            </div>
          </ProListItem>
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
