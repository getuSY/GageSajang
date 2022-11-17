import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReportChart from '../../atoms/ReportChart';
import { useStoreInfoFix } from '../../../hooks/user';
import {
  ProfessionalResultParams,
  ProfessionalStoreResult,
} from '../../../models/professional';
import Spinner from '../../atoms/Spinner';
import { useProfessionalResult } from '../../../hooks/professional';

interface ProfessionalResultProps {
  info: ProfessionalResultParams;
  result: ProfessionalStoreResult;
}

const ProfessionalResult = ({ info, result }: ProfessionalResultProps) => {
  const [flag, setFlag] = useState<boolean>(false);
  // const professsionalData = useProfessionalResult(info);
  // useEffect(() => {
  //   if (professsionalData.isSuccess) {
  //     console.log('쿼리로 받아보기', professsionalData.data);
  //   }
  // }, [professsionalData]);
  // const [result, setResult] = useState<ProfessionalStoreResult>({
  //   store: {
  //     total: 1.0,
  //     clerk: 3,
  //     area: 36,
  //     similar: 1.0,
  //     franchise: 0.0,
  //   },
  //   sales: {
  //     order: 3881.0,
  //     sales: 9.8268952e7,
  //   },
  //   status: {
  //     open: 0.0,
  //     close: 0.0,
  //   },
  // });
  // const result = {
  //   dongName: '개포2동', // 읍면동명
  //   industryCode: 'CS100001', // 업종 구분 코드
  //   industryName: '한식음식점', // 업종 명
  //   order: 36683, // 매출 건수
  //   total: 22.5, // 점포 수
  //   similar: 22.5, // 유사 업종 수
  //   open: 0, //개업
  //   close: 0, //폐업
  //   franchise: 2, // 프랜차이즈 업종 수
  //   sales: 59331326.5, // 매출/점포수 (user에선 sales int고 경영환경진단에선 float
  //   clerk: 3, // 직원수
  //   area: 60, //면적수
  // };
  const salesRate = (info.sales / result.sales.sales) * 100;
  const openRate = (result.status.open / Number(result.store.total)) * 100;
  const closeRate = (result.status.close / Number(result.store.total)) * 100;
  const clerkRate = info.clerk / result.store.clerk;
  const areaRate = (info.area / result.store.area) * 100;
  const areaData = {
    labels: ['내 가게 면적', '평균 가게 면적'],
    datasets: [
      {
        label: ['내 가게 면적'],
        data: [info.area, result.store.area],
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
        data: [info.sales, result.sales.sales / 3],
        backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
        borderRadius: 300,
        // borderWidth: 5,
        // borderColor: 'rgb(255, 99, 125)',
      },
    ],
  };
  const clerkData = {
    labels: ['내 가게 직원 수', '평균 직원 수'],
    datasets: [
      {
        label: ['내 가게 직원 수'],
        data: [info.clerk, result.store.clerk],
        backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
        borderRadius: 100,
      },
    ],
  };
  const frData = {
    labels: ['총 점포 수', '프랜차이즈 수'],
    datasets: [
      {
        data: [Math.ceil(result.store.total), result.store.franchise],
        backgroundColor: ['#edf3f1', 'rgb(255, 205, 86)'],
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
        data: [
          Math.ceil(result.store.total),
          result.status.open,
          result.status.close,
        ],
        backgroundColor: ['#edf3f1', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
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
      <Notice>
        ❗ 아래 보고서는 통계 자료에 따른 분석 결과입니다. 보고서를 참고하여
        가게 경영을 한 경우 모든 책임은 사장님께 있습니다.
      </Notice>
      <Summary>
        <SummaryCard>
          <div>
            <div className="cardTitle">매출 비교</div>
            {salesRate > 100 && (
              <div className="cardBody">
                평균 <Highlight>{Math.round(salesRate - 100)}%</Highlight> 더
                벌고 있어요!
              </div>
            )}
            {salesRate === 100 && (
              <div className="cardBody">
                평균 월 매출과 <Highlight>비슷하게</Highlight> 벌고 있어요!
              </div>
            )}
            {salesRate < 100 && (
              <div className="cardBody">
                평균 <Highlight>{Math.round(100 - salesRate)}%</Highlight> 적게
                벌고 있어요!
              </div>
            )}
          </div>
        </SummaryCard>
        <SummaryCard>
          <div>
            <div className="cardTitle">개폐업률</div>
            <div className="cardBody">
              <Highlight>{openRate} %</Highlight> /
              <Highlight> {closeRate} %</Highlight>
              <br></br>(개업 / 폐업)
            </div>
          </div>
        </SummaryCard>
        <SummaryCard>
          <div>
            <div className="cardTitle">직원 수 비교</div>
            {clerkRate > 1 && (
              <div className="cardBody">
                평균보다 <Highlight>{clerkRate} 배</Highlight> 더 많이 고용하고
                있어요!
              </div>
            )}
            {clerkRate === 1 && (
              <div className="cardBody">
                <Highlight>평균만큼</Highlight> 고용하고 있어요!
              </div>
            )}
            {clerkRate < 1 && (
              <div className="cardBody">
                평균보다 <Highlight>{clerkRate}배</Highlight> 더 적게 고용하고
                있어요!
              </div>
            )}
          </div>
        </SummaryCard>
        <SummaryCard>
          <div>
            <div className="cardTitle">가게 면적 비교</div>
            {areaRate > 100 && (
              <div className="cardBody">
                평균 대비 <Highlight>{areaRate - 100}%</Highlight> 더 넓어요!
              </div>
            )}
            {areaRate === 100 && (
              <div className="cardBody">
                평균 면적과 거의 <Highlight>비슷해요!</Highlight>
              </div>
            )}
            {areaRate < 100 && (
              <div className="cardBody">
                평균 대비 <Highlight>{100 - areaRate}%</Highlight> 더 좁아요!
              </div>
            )}
          </div>
        </SummaryCard>
      </Summary>
      <ProRepoDetail>
        <p
          style={{
            fontSize: '40px',
            margin: '8rem auto',
            fontWeight: '600',
          }}
        >
          " {info.dongName} {info.industryName} "의 평균값을 토대로
          보여드릴게요!
        </p>
        <ReportDetails>
          <DetailCards>
            <DetailCardHeader>평균 월 매출</DetailCardHeader>
            <ReportChart
              type="bar"
              data={salesData}
              style={{ width: '400px', height: '300px' }}
              grad={[
                [
                  [0, '#49D0A8'],
                  [0.8, '#F9F254'],
                ],
                [[0, '#ebdd4a']],
              ]}
            ></ReportChart>
            {salesRate > 100 ? (
              <DetailCardScript>
                평균 월 매출보다 많이 벌고 있습니다.<br></br>
                순이익을 높이고 싶다면 부대비용에 집중해보세요.
              </DetailCardScript>
            ) : salesRate < 100 ? (
              <DetailCardScript>
                평균 월 매출보다 적게 벌고 있습니다.<br></br>월 매출이 높은
                가게를 분석해보면 어떨까요?
              </DetailCardScript>
            ) : (
              <DetailCardScript>
                평균 월 매출과 비슷하게 벌고 있습니다.<br></br>
              </DetailCardScript>
            )}
          </DetailCards>
          <DetailCards>
            <DetailCardHeader>평균 매출 건수</DetailCardHeader>
            <img
              src="/assets/img/shopping-cart.png"
              alt="sales_number"
              width="200px"
            />
            <div
              style={{
                fontSize: '30px',
                fontWeight: '600',
                color: 'green',
                marginTop: '20px',
              }}
            >
              {result.sales.order} 건
            </div>
            <DetailCardScript>
              월 평균 매출 건수는 {result.sales.order} 건입니다. <br></br> 평균
              매출 건수가 이보다 낮지 않은지 생각해보세요. <br></br> 매출 건수가
              낮다면 경영 환경 개선이 필요합니다.
            </DetailCardScript>
          </DetailCards>
          <DetailCards>
            <DetailCardHeader>평균 직원 수</DetailCardHeader>
            <ReportChart
              type="bar"
              data={clerkData}
              style={{ width: '400px', height: '300px' }}
              grad={[
                [
                  [0, '#49D0A8'],
                  [0.8, '#F9F254'],
                ],
                [[0, '#ebdd4a']],
              ]}
            ></ReportChart>
            <DetailCardScript>
              <br></br>
            </DetailCardScript>
            {clerkRate > 1 ? (
              <DetailCardScript>
                평균 직원 수보다 많이 고용하고 있습니다. <br></br>
                인건비 재조정이 필요하지는 않은지 고려해보세요.
              </DetailCardScript>
            ) : clerkRate < 1 ? (
              <DetailCardScript>
                평균 직원 수보다 적게 고용하고 있습니다.<br></br>때론 인건비
                감축보다 <br></br>인력 충원이 이익이 될 수 있음을 기억하세요.
              </DetailCardScript>
            ) : (
              <DetailCardScript>
                평균 직원 수와 비슷하게 고용하고 있습니다.<br></br>그래도
                순이익이 적다면, <br></br>직원 외 다른 부분을 살펴보면 어떨까요?
              </DetailCardScript>
            )}
          </DetailCards>
          <DetailCards>
            <DetailCardHeader>평균 가게 면적</DetailCardHeader>
            <ReportChart
              type="bar"
              data={areaData}
              style={{ width: '400px', height: '300px', margin: '20px' }}
              options={areaOptions}
              grad={[
                [
                  [0, '#49D0A8'],
                  [0.8, '#F9F254'],
                ],
                [[0, '#ebdd4a']],
              ]}
              isVert={false}
            ></ReportChart>
            {areaRate > 100 ? (
              <DetailCardScript>
                {info.dongName} {info.industryName} 평균 가게 면적보다 넓습니다.
                <br></br>
                가게 면적을 제대로 활용하고 있는지 체크해보세요.
              </DetailCardScript>
            ) : areaRate < 100 ? (
              <DetailCardScript>
                {info.dongName} {info.industryName} 평균 가게 면적보다 좁습니다.
                <br></br> 상황에 따라 확장이전을 고려하거나 <br></br> 배치를
                바꿔보면 도움이 될 것 같습니다.
              </DetailCardScript>
            ) : (
              <DetailCardScript>
                {info.dongName} {info.industryName} 평균 가게 면적과 비슷합니다.
                <br></br>순이익이 낮다면 다른 지출 항목을 살펴보면 어떨까요?
              </DetailCardScript>
            )}
          </DetailCards>
          <DetailCards>
            <DetailCardHeader>개폐업 점포 수</DetailCardHeader>
            <ReportChart
              type="doughnut"
              data={ocData}
              style={{ width: '400px', height: '300px', margin: '20px' }}
              options={ocOptions}
              grad={[[[0, '#edf3f1']], [[0, '#49D0A8']], [[0.8, '#F9F254']]]}
            ></ReportChart>
            {result.status.open > result.status.close ? (
              <DetailCardScript>
                {info.dongName}에 새로 개업한 {info.industryName} 수는{' '}
                {result.status.open} 곳, <br></br> 폐업한 {info.industryName}{' '}
                수는 {result.status.close} 곳입니다. <br></br>
                동종업종이 늘고 있는 추세라고 할 수 있습니다.
              </DetailCardScript>
            ) : result.status.open < result.status.close ? (
              <DetailCardScript>
                {info.dongName}에 새로 개업한 {info.industryName} 수는{' '}
                {result.status.open} 곳, <br></br> 폐업한 {info.industryName}{' '}
                수는 {result.status.close} 곳입니다. <br></br>
                동종업종 성장률이 하락하고 있는 추세라고 할 수 있습니다.
              </DetailCardScript>
            ) : (
              <DetailCardScript>
                {info.dongName}에 새로 개업한 {info.industryName} 수는{' '}
                {result.status.open} 곳, <br></br> 폐업한 {info.industryName}{' '}
                수는 {result.status.close} 곳입니다. <br></br>
                동종업계 성장률은 정체되어 있다고 할 수 있습니다.
              </DetailCardScript>
            )}
          </DetailCards>
          <DetailCards>
            <DetailCardHeader>프랜차이즈 점포 수</DetailCardHeader>
            <ReportChart
              type="doughnut"
              data={frData}
              style={{ width: '400px', height: '300px', margin: '20px' }}
              options={frcOptions}
              grad={[
                [[0, '#edf3f1']],
                [
                  [1, '#49D0A8'],
                  [0.7, '#F9F254'],
                ],
              ]}
            ></ReportChart>
            <DetailCardScript>
              {info.dongName}의 {info.industryName} 프랜차이즈 점포 수는 {''}
              {result.store.franchise}곳입니다.
              <br></br> 프랜차이즈 점포가 많다면 <br></br>내 가게만의 특별함을
              만들어보면 좋을 것 같아요.
            </DetailCardScript>
            <DetailCardScript></DetailCardScript>
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
  padding: 30px;
  display: flex;
  gap: 30px;
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
    color: #1ca37c;
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
  padding: 30px;
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
  /* color: #1ca37c; */
  font-size: 40px;
`;

const DetailCardScript = styled.p`
  font-size: 20px;
  margin: 2rem;
`;

const Highlight = styled.span`
  color: red;
  font-size: 22px;
  font-weight: 600;
`;

const Notice = styled.div`
  background-color: lightyellow;
  border-radius: 20px;
  /* width: 100%; */
  height: 60px;
  margin: 2rem 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  padding: 0 30px;
`;

export default ProfessionalResult;
