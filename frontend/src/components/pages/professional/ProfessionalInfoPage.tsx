import React, { useState } from 'react';
import styled from 'styled-components';
import LabelInput from '../../molecules/LabelInput';
import ReportChart from '../../atoms/ReportChart';
import SalesSimulation from '../simulation/SalesSimulation';
import ProfessionalResultPage from './ProfessionalResultPage';

const ProfessionalInfoPage = () => {
  const [storeName, setStoreName] = useState();
  const [sigungu, setSigungu] = useState();
  const [dongName, setDongName] = useState();
  const [employee, setEmployee] = useState(0);
  const [storeArea, setStoreArea] = useState(0);
  const [sales, setSales] = useState(0);
  const [business, setBusiness] = useState(0);
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

  const data = {
    labels: [1, 2, 3, 4],
    datasets: [
      {
        label: '매출액 TOP 5',
        data: [10, 20, 30, 25, 15],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'pink',
          'purple',
        ],
        hoverOffset: 4,
        // borderColor: 'black',
        // borderWidth: 1,
        // tension: 0.8,
        // hidden: true,
      },
    ],
  };

  return (
    <Wrapper>
      <ProSide>
        <ProList>
          <ProListItem>
            <LabelInput
              label="가게 이름"
              placeholder="가게 이름을 입력해주세요."
              // onChange={changeStoreName}
            ></LabelInput>
          </ProListItem>
          <ProListItem>
            <LabelInput
              label="가게 시군구"
              placeholder="시군구를 입력해주세요."
              // onChange={changeSigungu}
            ></LabelInput>
            <LabelInput
              label="가게 행정동"
              placeholder="행정동을 입력해주세요."
              // onChange={changeDongName}
            ></LabelInput>
          </ProListItem>
          <ProListItem>
            <LabelInput
              label="업종"
              placeholder="가게 업종을 입력해주세요."
              // onChange={changeBusiness}
            ></LabelInput>
          </ProListItem>
          <ProListItem>
            <LabelInput
              label="직원 수"
              placeholder="직원 수를 입력해주세요."
              // onChange={changeEmployee}
            ></LabelInput>
          </ProListItem>
          <ProListItem>
            <LabelInput
              label="가게 면적"
              placeholder="가게 면적을 입력해주세요."
              // onChange={changeStoreArea}
            ></LabelInput>
          </ProListItem>
          <ProListItem>
            <LabelInput
              label="평균 월 매출"
              placeholder="평균 월 매출을 입력해주세요."
              // onChange={changeSales}
            ></LabelInput>
          </ProListItem>
        </ProList>
      </ProSide>
      // main
      <Summary>
        <SummaryCard>
          <div>
            <div className="cardTtile">매출 비교</div>
            <div className="cardBody">fdsdf</div>
          </div>
          <div>분석 보기</div>
        </SummaryCard>
        <SummaryCard>
          <div>
            <div className="cardTtile">개폐업률</div>
            <div className="cardBody">0 / 1</div>
          </div>
          <div>분석 보기</div>
        </SummaryCard>
        <SummaryCard>
          <div>
            <div className="cardTtile">직원 수 비교</div>
            <div className="cardBody">dfsffds</div>
          </div>
          <div>분석 보기</div>
        </SummaryCard>
        <SummaryCard>
          <div>
            <div className="cardTtile">가게 면적 비교</div>
            <div className="cardBody">dfdsfsds</div>
          </div>
          <div>분석 보기</div>
        </SummaryCard>
      </Summary>
      <ProRepoDetail>
        oo동 ㅁㅁ업종의 평균값을 토대로 보여드릴게요!
        <ReportDetails>
          <DetailCards>
            <DetailCardHeader>평균 월 매출</DetailCardHeader>
            <ReportChart
              type="doughnut"
              data={data}
              style={{ width: '200px', height: '200px' }}
            ></ReportChart>
          </DetailCards>
          <DetailCards>
            <DetailCardHeader>평균 매출 건수</DetailCardHeader>
            <ReportChart
              type="doughnut"
              data={data}
              style={{ width: '200px', height: '200px' }}
            ></ReportChart>
          </DetailCards>
          <DetailCards>
            <DetailCardHeader>평균 직원 수</DetailCardHeader>
            <ReportChart
              type="doughnut"
              data={data}
              style={{ width: '200px', height: '200px' }}
            ></ReportChart>
          </DetailCards>
          <DetailCards>
            <DetailCardHeader>평균 가게 면적</DetailCardHeader>
            <ReportChart
              type="doughnut"
              data={data}
              style={{ width: '200px', height: '200px' }}
            ></ReportChart>
          </DetailCards>
          <DetailCards>
            <DetailCardHeader>개폐업 점포 수</DetailCardHeader>
            <ReportChart
              type="doughnut"
              data={data}
              style={{ width: '200px', height: '200px' }}
            ></ReportChart>
          </DetailCards>
          <DetailCards>
            <DetailCardHeader>프랜차이즈 점포 수</DetailCardHeader>
            <ReportChart
              type="doughnut"
              data={data}
              style={{ width: '200px', height: '200px' }}
            ></ReportChart>
          </DetailCards>
        </ReportDetails>
      </ProRepoDetail>
      {/* <ProfessionalResultPage></ProfessionalResultPage>
      <ProfessionalResultPage></ProfessionalResultPage>
      <ProfessionalResultPage></ProfessionalResultPage> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  // min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  width: 100%;
`;

const ProSide = styled.div`
  position: fixed;
  width: 300px;
  height: 100%;
  background: green;
  border-left: 10px solid green;
  transition: 0.5s;
  overflow: hidden;
  z-index: 1;
`;

const ProList = styled.ul`
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;

  & li:nth-child(1) {
    margin-bottom: 40px;
    pointer-events: none;
  }

  & li:hover {
    background: green;
  }
`;

const ProListItem = styled.li`
  position: relative;
  width: 200%;
  list-style: none;

  & a {
  }
`;

const ProRport = styled.div`
  position: absolute;
  width: calc(100% - 300%);
  left: 300px;
  min-height: 100vh;
  background: white;
  transition: 0.5s;
`;

const Summary = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;

  & .div:hover {
    background: green;
  }

  & .div:hover .cardTitle,
  div:hover .cardBody {
    color: white;
  }
`;

const SummaryCard = styled.div`
  position: relative;
  background: white;
  padding: 30px;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  & .cardTitle {
    position: relative;
    font-size: 2.5em;
    font-weight: 500;
    color: green;
  }

  & .cardBody {
    color: black;
    font-size: 1.1em;
    margin-top: 5em;
  }
`;

const ProRepoDetail = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`;

const ReportDetails = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  grid-row-gap: 30px;
  margin-top: 10px;
`;

const DetailCards = styled.div`
  position: relative;
  display: grid;
  min-height: 300px;
  background: white;
  padding: 20px;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const DetailCardHeader = styled.p`
  /* display: flex;
  justify-content: flex-start;
  align-items: flex-start; */
`;

export default ProfessionalInfoPage;
