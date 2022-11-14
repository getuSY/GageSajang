import { faBlackTie } from '@fortawesome/free-brands-svg-icons';
import { url } from 'inspector';
import React from 'react';
import styled from 'styled-components';
import ReportChart from '../../atoms/ReportChart';

interface ProfessionalResultProps {}

const datas = {
  labels: [1, 2, 3, 4, 5],
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
    },
  ],
};

const professionalResultPage = ({}: ProfessionalResultProps) => {
  const result = {
    dongName: '개포2동', // 읍면동명
    industryCode: 'CS100001', // 업종 구분 코드
    industryName: '한식음식점', // 업종 명
    order: 36683, // 매출 건수
    total: 22.5, // 점포 수
    similar: 22.5, // 유사 업종 수
    open: 0, //개업
    close: 0, //폐업
    franchise: 2, // 프랜차이즈 업종 수
    sales: 59331326.5, // 매출/점포수 (user에선 sales int고 경영환경진단에선 float
    clerk: 3, // 직원수
    area: 60, //면적수
  };
  const salesRate = (12315546 / result.sales) * 100;
  const openRate = (result.open / Number(result.total)) * 100;
  const closeRate = (result.close / Number(result.total)) * 100;
  const clerkRate = 6 / result.clerk;
  const areaRate = (40.5 / result.area) * 100;
  const areaData = {
    labels: ['내 가게 면적', '평균 가게 면적'],
    datasets: [
      {
        label: ['내 가게 면적'],
        data: [42, result.area],
        backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
      },
    ],
  };
  const areaOptions = {
    indexAxis: 'y',
  };
  const salesData = {
    labels: ['내 월 매출', '평균 월 매출'],
    datasets: [
      {
        label: ['내 가게 월 매출'],
        data: [6000000, result.sales],
        backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
        tension: 0.5,
        borderWidth: 5,
        borderColor: 'rgb(255, 99, 125)',
      },
    ],
  };
  const salesOptions = {};
  const clerkData = {
    labels: ['내 가게 직원 수', '평균 직원 수'],
    datasets: [
      {
        label: ['내 가게 직원 수'],
        data: [6, result.clerk],
        backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
        borderRadius: 100,
      },
    ],
  };
  const clerkOptions = {};
  const frData = {
    labels: ['총 점포 수', '프랜차이즈 점포 수'],
    datasets: [
      {
        data: [Math.ceil(result.total), result.franchise],
        backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
        hoverOffset: 5,
      },
    ],
  };
  const frcOptions = {
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: '총 점포 수 대비 프랜차이즈 점포 수',
      },
    },
  };
  const ocData = {
    labels: ['총 점포 수', '개업 점포 수', '폐업 점포 수'],
    datasets: [
      {
        data: [Math.ceil(result.total), result.open, result.close],
        backgroundColor: [
          'rgb(255, 99, 242)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 5,
      },
    ],
  };
  const ocOptions = {
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: '총 점포 수 및 개폐업 점포 수',
      },
    },
  };
  return (
    <Wrapper>
      <Summary>
        <SummaryCard>
          <div>
            <div className="cardTitle">매출 비교</div>
            {salesRate > 100 && (
              <div className="cardBody">
                평균 {Math.round(salesRate - 100)}% 더 벌고 있어요!
              </div>
            )}
            {salesRate === 100 && (
              <div className="cardBody">평균 월 매출 수준으로 벌고 있어요!</div>
            )}
            {salesRate < 100 && (
              <div className="cardBody">
                평균 {Math.round(100 - salesRate)}% 적게 벌고 있어요!
              </div>
            )}
          </div>
        </SummaryCard>
        <SummaryCard>
          <div>
            <div className="cardTitle">개폐업률</div>
            <div className="cardBody">
              {openRate} % / {closeRate} % <br></br>(개업 / 폐업)
            </div>
          </div>
        </SummaryCard>
        <SummaryCard>
          <div>
            <div className="cardTitle">직원 수 비교</div>
            {clerkRate > 1 && (
              <div className="cardBody">
                평균보다 {clerkRate} 배 더 많이 고용하고 있어요!
              </div>
            )}
            {clerkRate === 1 && (
              <div className="cardBody">평균만큼 고용하고 있어요!</div>
            )}
            {clerkRate < 1 && (
              <div className="cardBody">
                평균보다 {clerkRate} 배 더 적게 고용하고 있어요!
              </div>
            )}
          </div>
        </SummaryCard>
        <SummaryCard>
          <div>
            <div className="cardTitle">가게 면적 비교</div>
            {areaRate > 100 && (
              <div className="cardBody">
                평균 대비 {areaRate - 100} % 더 넓어요!
              </div>
            )}
            {areaRate === 100 && (
              <div className="cardBody">평균 면적과 거의 비슷해요!</div>
            )}
            {areaRate < 100 && (
              <div className="cardBody">
                평균 대비 {100 - areaRate} % 더 좁아요!
              </div>
            )}
          </div>
        </SummaryCard>
      </Summary>
      <ProRepoDetail>
        <p style={{ fontSize: '40px', margin: '8rem auto', fontWeight: '600' }}>
          " oo동 ㅁㅁ업종 "의 평균값을 토대로 보여드릴게요!
        </p>
        <ReportDetails>
          <DetailCards>
            <DetailCardHeader>평균 월 매출</DetailCardHeader>
            <ReportChart
              type="line"
              data={salesData}
              style={{ width: '400px', height: '300px' }}
            ></ReportChart>
            <DetailCardScript>
              평균 월 매출보다 적게 벌고 있습니다.{' '}
            </DetailCardScript>
          </DetailCards>
          <DetailCards>
            <DetailCardHeader>평균 매출 건수</DetailCardHeader>
            <img src="/assets/img/shopping-cart.png" alt="" />
          </DetailCards>
          <DetailCards>
            <DetailCardHeader>평균 직원 수</DetailCardHeader>
            <ReportChart
              type="bar"
              data={clerkData}
              style={{ width: '400px', height: '300px' }}
            ></ReportChart>
            <DetailCardScript>
              평균 직원 수보다 많이 고용하고 있습니다. <br></br> 인건비 재조정이
              필요하지는 않을까요?
            </DetailCardScript>
          </DetailCards>
          <DetailCards>
            <DetailCardHeader>평균 가게 면적</DetailCardHeader>
            <ReportChart
              type="bar"
              data={areaData}
              style={{ width: '400px', height: '300px', margin: '20px' }}
              options={areaOptions}
            ></ReportChart>
          </DetailCards>
          <DetailCards>
            <DetailCardHeader>개폐업 점포 수</DetailCardHeader>
            <ReportChart
              type="doughnut"
              data={ocData}
              style={{ width: '400px', height: '300px', margin: '20px' }}
              options={ocOptions}
            ></ReportChart>
          </DetailCards>
          <DetailCards>
            <DetailCardHeader>프랜차이즈 점포 수</DetailCardHeader>
            <ReportChart
              type="doughnut"
              data={frData}
              style={{ width: '400px', height: '300px', margin: '20px' }}
              options={frcOptions}
            ></ReportChart>
          </DetailCards>
        </ReportDetails>
      </ProRepoDetail>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Summary = styled.div`
  /* width: 100%; */
  padding: 20px;
  display: flex;
  gap: 30px;
  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px; */
`;

const SummaryCard = styled.div`
  background: white;
  padding: 30px;
  height: 150px;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25%;

  & div .cardTitle {
    position: relative;
    font-size: 36px;
    font-weight: 600;
    color: green;
    margin-bottom: 20px;
  }

  & div .cardBody {
    color: black;
    font-size: 22px;
    font-weight: 300;
  }
`;

const ProRepoDetail = styled.div`
  width: 100%;
  text-align: center;
`;

const ReportDetails = styled.div`
  /* width: 100%; */
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 30px;
  grid-row-gap: 30px;
`;

const DetailCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 300px;
  background: white;
  /* padding: 20px; */
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const DetailCardHeader = styled.p`
  /* text-align: start; */
  font-weight: 600;
  color: green;
  font-size: 40px;
`;

const DetailCardScript = styled.p`
  font-size: 20px;
  margin: 2rem;
`;

const salesImage = styled.div`
  background-image: url('assets\img\shopping-cart.png');
`;

export default professionalResultPage;
