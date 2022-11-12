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
  return (
    <Wrapper>
      <Summary>
        <SummaryCard>
          <div>
            <div className="cardTitle">매출 비교</div>
            <div className="cardBody">평균 20% 더 벌고 있어요!</div>
          </div>
          {/* <div>분석 보기</div> */}
        </SummaryCard>
        <SummaryCard>
          <div>
            <div className="cardTitle">개폐업률</div>
            <div className="cardBody">
              0 / 1 <br></br>(개업 / 폐업)
            </div>
          </div>
          {/* <div>분석 보기</div> */}
        </SummaryCard>
        <SummaryCard>
          <div>
            <div className="cardTitle">직원 수 비교</div>
            <div className="cardBody">평균보다 더 많이 고용하고 있어요!</div>
          </div>
          {/* <div>분석 보기</div> */}
        </SummaryCard>
        <SummaryCard>
          <div>
            <div className="cardTitle">가게 면적 비교</div>
            <div className="cardBody">평균 대비 40% 더 넓어요!</div>
          </div>
          {/* <div>분석 보기</div> */}
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
              type="doughnut"
              data={datas}
              style={{ width: '200px', height: '200px' }}
            ></ReportChart>
          </DetailCards>
          <DetailCards>
            <DetailCardHeader>평균 매출 건수</DetailCardHeader>
            <ReportChart
              type="doughnut"
              data={datas}
              style={{ width: '200px', height: '200px' }}
            ></ReportChart>
          </DetailCards>
          <DetailCards>
            <DetailCardHeader>평균 직원 수</DetailCardHeader>
            <ReportChart
              type="doughnut"
              data={datas}
              style={{ width: '200px', height: '200px' }}
            ></ReportChart>
          </DetailCards>
          <DetailCards>
            <DetailCardHeader>평균 가게 면적</DetailCardHeader>
            <ReportChart
              type="doughnut"
              data={datas}
              style={{ width: '200px', height: '200px' }}
            ></ReportChart>
          </DetailCards>
          <DetailCards>
            <DetailCardHeader>개폐업 점포 수</DetailCardHeader>
            <ReportChart
              type="doughnut"
              data={datas}
              style={{ width: '200px', height: '200px' }}
            ></ReportChart>
          </DetailCards>
          <DetailCards>
            <DetailCardHeader>프랜차이즈 점포 수</DetailCardHeader>
            <ReportChart
              type="doughnut"
              data={datas}
              style={{ width: '200px', height: '200px' }}
            ></ReportChart>
          </DetailCards>
        </ReportDetails>
      </ProRepoDetail>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */
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
  min-height: 150px;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* gap: 1rem; */
  cursor: pointer;

  & div .cardTitle {
    position: relative;
    font-size: 36px;
    font-weight: 600;
    color: green;
    margin-bottom: 20px;
    /* font-style: bold; */
    /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
  }

  & div .cardBody {
    color: black;
    font-size: 30px;
    font-weight: 300;
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
  /* margin-top: 10px; */
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
  /* text-align: start; */
  font-weight: 600;
  color: green;
  font-size: 40px;
`;

export default professionalResultPage;
