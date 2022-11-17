import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import ReportChart from '../../atoms/ReportChart';
import { useStoreInfoFix } from '../../../hooks/user';
import {
  ProfessionalResultParams,
  ProfessionalStoreResult,
} from '../../../models/professional';
import ReportContent from '../../molecules/AmatuerReportContent';
import Spinner from '../../atoms/Spinner';
import SummaryItem from './SummaryItem';
import { useProfessionalData } from '../../../hooks/professional';

interface ProfessionalResultProps {
  info: ProfessionalResultParams;
}

const ProfessionalResult = ({ info }: ProfessionalResultProps) => {
  const mutation = useStoreInfoFix();
  const { data, isLoading, isSuccess, isError, error } = mutation;
  const [result, setResult] = useState<ProfessionalStoreResult>({
    store: {
      total: 1.0,
      clerk: 3,
      area: 36,
      similar: 1.0,
      franchise: 0.0,
    },
    sales: {
      order: 3881.0,
      sales: 9.8268952e7,
    },
    status: {
      open: 0.0,
      close: 0.0,
    },
  });
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

  const { areaData, salesData, clerkData, frData, ocData } =
    useProfessionalData(result);

  return (
    <Wrapper>
      {mutation.isLoading && <Spinner></Spinner>}
      {/* <Notice>
        ❗ 아래 보고서는 통계 자료에 따른 분석 결과입니다. 보고서를 참고하여
        가게 경영을 한 경우 모든 책임은 사장님께 있습니다.
      </Notice> */}
      <ReportAlert>
        ❗ 아래 분석 결과는 통계에 따른 추정 결과입니다. 향후 상황에 따라 다를
        수 있기 때문에, 판단 하에 참고하여 활용하시기 바랍니다.
      </ReportAlert>
      <Summary>
        <SummaryItem title="매출 비교" style={{ width: 0, flexGrow: 1 }}>
          <div>
            {' '}
            {salesRate > 100 && (
              <>
                평균 <Highlight>{Math.round(salesRate - 100)}%</Highlight> 더
                벌고 있어요!
              </>
            )}
            {salesRate === 100 && (
              <>
                평균 월 매출과 <Highlight>비슷하게</Highlight> 벌고 있어요!
              </>
            )}
            {salesRate < 100 && (
              <>
                평균 <Highlight>{Math.round(100 - salesRate)}%</Highlight> 적게
                벌고 있어요!
              </>
            )}
          </div>
        </SummaryItem>
        <SummaryItem title="개폐업률" style={{ width: 0, flexGrow: 1 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div>
              <Highlight>{openRate} %</Highlight> /
              <Highlight> {closeRate} %</Highlight>
            </div>
            <div>(개업 / 폐업)</div>
          </div>
        </SummaryItem>
        <SummaryItem title="직원 수 비교" style={{ width: 0, flexGrow: 1 }}>
          <div>
            {clerkRate > 1 && (
              <>
                평균보다 <Highlight>{clerkRate} 배</Highlight> 더 많이 고용하고
                있어요!
              </>
            )}
            {clerkRate === 1 && (
              <>
                <Highlight>평균만큼</Highlight> 고용하고 있어요!
              </>
            )}
            {clerkRate < 1 && (
              <>
                평균보다 <Highlight>{clerkRate}배</Highlight> 더 적게 고용하고
                있어요!
              </>
            )}
          </div>
        </SummaryItem>
        <SummaryItem title="가게 면적 비교" style={{ width: 0, flexGrow: 1 }}>
          <div>
            {areaRate > 100 && (
              <>
                평균 대비 <Highlight>{areaRate - 100}%</Highlight> 더 넓어요!
              </>
            )}
            {areaRate === 100 && (
              <>
                평균 면적과 거의 <Highlight>비슷해요!</Highlight>
              </>
            )}
            {areaRate < 100 && (
              <>
                평균 대비 <Highlight>{100 - areaRate}%</Highlight> 더 좁아요!
              </>
            )}
          </div>
        </SummaryItem>
        <SummaryItem title="가게 면적 비교" style={{ width: 0, flexGrow: 1 }}>
          <div>
            {areaRate > 100 && (
              <>
                평균 대비 <Highlight>{areaRate - 100}%</Highlight> 더 넓어요!
              </>
            )}
            {areaRate === 100 && (
              <>
                평균 면적과 거의 <Highlight>비슷해요!</Highlight>
              </>
            )}
            {areaRate < 100 && (
              <>
                평균 대비 <Highlight>{100 - areaRate}%</Highlight> 더 좁아요!
              </>
            )}
          </div>
        </SummaryItem>
      </Summary>
      <ReportContent
        style={{ marginTop: '2rem' }}
        title="~~의 평균값을 토대로 보여드릴게요!"
      />
      <div className="chart-div">
        <ReportContent
          title="평균 월 매출"
          style={{ width: 0, flexGrow: 1 }}
          chartData={salesData}
        >
          {salesRate > 100 ? (
            <DetailCardScript>
              <div>평균 월 매출보다 많이 벌고 있습니다.</div>
              <div>순이익을 높이고 싶다면 부대비용에 집중해보세요.</div>
            </DetailCardScript>
          ) : salesRate < 100 ? (
            <DetailCardScript>
              평균 월 매출보다 적게 벌고 있습니다.<br></br>월 매출이 높은 가게를
              분석해보면 어떨까요?
            </DetailCardScript>
          ) : (
            <DetailCardScript>
              평균 월 매출과 비슷하게 벌고 있습니다.<br></br>
            </DetailCardScript>
          )}
        </ReportContent>
        <ReportContent title="평균 매출 건수" style={{ width: 0, flexGrow: 1 }}>
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
        </ReportContent>
        <ReportContent
          title="평균 직원 수"
          style={{ width: 0, flexGrow: 1 }}
          chartData={clerkData}
        >
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
              평균 직원 수와 비슷하게 고용하고 있습니다.<br></br>그래도 순이익이
              적다면, <br></br>직원 외 다른 부분을 살펴보면 어떨까요?
            </DetailCardScript>
          )}
        </ReportContent>
      </div>
      <div className="chart-div">
        <ReportContent
          title="평균 가게 면적"
          style={{ width: 0, flexGrow: 1 }}
          chartData={areaData}
          isVert={false}
        >
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
        </ReportContent>
        <ReportContent
          title="개폐업 점포 수"
          style={{ width: 0, flexGrow: 1 }}
          chartData={ocData}
        >
          {result.status.open > result.status.close ? (
            <DetailCardScript>
              {info.dongName}에 새로 개업한 {info.industryName} 수는{' '}
              {result.status.open} 곳, <br></br> 폐업한 {info.industryName} 수는{' '}
              {result.status.close} 곳입니다. <br></br>
              동종업종이 늘고 있는 추세라고 할 수 있습니다.
            </DetailCardScript>
          ) : result.status.open < result.status.close ? (
            <DetailCardScript>
              {info.dongName}에 새로 개업한 {info.industryName} 수는{' '}
              {result.status.open} 곳, <br></br> 폐업한 {info.industryName} 수는{' '}
              {result.status.close} 곳입니다. <br></br>
              동종업종 성장률이 하락하고 있는 추세라고 할 수 있습니다.
            </DetailCardScript>
          ) : (
            <DetailCardScript>
              {info.dongName}에 새로 개업한 {info.industryName} 수는{' '}
              {result.status.open} 곳, <br></br> 폐업한 {info.industryName} 수는{' '}
              {result.status.close} 곳입니다. <br></br>
              동종업계 성장률은 정체되어 있다고 할 수 있습니다.
            </DetailCardScript>
          )}
        </ReportContent>
        <ReportContent
          title="프랜차이즈 점포 수"
          style={{ width: 0, flexGrow: 1 }}
          chartData={frData}
        >
          <DetailCardScript>
            {info.dongName}의 {info.industryName} 프랜차이즈 점포 수는 {''}
            {result.store.franchise}곳입니다.
            <br></br> 프랜차이즈 점포가 많다면 <br></br>내 가게만의 특별함을
            만들어보면 좋을 것 같아요.
          </DetailCardScript>
        </ReportContent>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* margin: 12px; */
  /* padding: 12px; */
  /* flex-grow: 1; */
  flex-grow: 1;
  /* height: calc(100vh - 65px); */
  overflow-y: scroll;
  left: 450px;
  background: #eef1ee;
  transition: 0.5s;
  /* display: flex;
  flex-direction: column; */
  /* align-items: center; */
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  & .chart-div {
    display: flex;
    width: 100%;
    gap: 12px;
  }
`;

const Summary = styled.div`
  /* width: 100%; */
  /* padding: 30px; */
  display: flex;
  gap: 12px;
`;

const DetailCardScript = styled.p`
  font-size: 20px;
  margin: 2rem;
`;

const Highlight = styled.span`
  color: red;
  /* font-size: 22px; */
  font-weight: 600;
`;

const ReportAlert = styled.div`
  background: #feffca;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px 20px;
  border-radius: 10px;
`;

export default ProfessionalResult;
