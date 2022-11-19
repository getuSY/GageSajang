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
import {
  useProfessionalData,
  useProfessionalResult,
} from '../../../hooks/professional';

interface ProfessionalResultProps {
  storeInfo: ProfessionalResultParams;
  professionalResult: any;
}

const ProfessionalResult = ({
  storeInfo,
  professionalResult,
}: ProfessionalResultProps) => {
  // const result = useProfessionalResult();
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

  // const salesRate = (info.sales / result.sales.sales) * 100;
  // const openRate = (result.status.open / Number(result.store.total)) * 100;
  // const closeRate = (result.status.close / Number(result.store.total)) * 100;
  // const clerkRate = info.clerk / result.store.clerk;
  // const areaRate = (info.area / result.store.area) * 100;

  const { areaData, salesData, clerkData, frData, ocData } =
    useProfessionalData(professionalResult);

  return (
    <Wrapper>
      <ReportAlert>
        ❗ 아래 분석 결과는 통계에 따른 추정 결과입니다. 향후 상황에 따라 다를
        수 있기 때문에, 판단 하에 참고하여 활용하시기 바랍니다.
      </ReportAlert>
      <Summary>
        <SummaryItem
          title="매출 비교"
          style={{ width: 0, flexGrow: 1 }}
        ></SummaryItem>
        <SummaryItem
          title="평균 매출 건수"
          style={{ width: 0, flexGrow: 1 }}
        ></SummaryItem>
        <SummaryItem
          title="개폐업률"
          style={{ width: 0, flexGrow: 1 }}
        ></SummaryItem>
        <SummaryItem
          title="가게 면적 비교"
          style={{ width: 0, flexGrow: 1 }}
        ></SummaryItem>
        <SummaryItem
          title="직원 수 비교"
          style={{ width: 0, flexGrow: 1 }}
        ></SummaryItem>
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
          {/* {salesRate > 100 ? (
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
          )} */}
        </ReportContent>
        <ReportContent
          title="평균 매출 건수"
          style={{ width: 0, flexGrow: 1, justifyContent: 'space-between' }}
        >
          <img
            src="/assets/img/shopping-cart.png"
            alt="sales_number"
            width="200px"
            style={{ marginTop: '1.25rem', marginRight: '1.75rem' }}
          />
          <div
            style={{
              fontSize: '30px',
              fontWeight: '600',
              color: 'green',
              marginTop: '20px',
            }}
          >
            {professionalResult.sales.order} 건
          </div>
        </ReportContent>
        <ReportContent
          title="평균 직원 수"
          style={{ width: 0, flexGrow: 1 }}
          chartData={clerkData}
        ></ReportContent>
      </div>
      <div className="chart-div">
        <ReportContent
          title="평균 가게 면적"
          style={{ width: 0, flexGrow: 1 }}
          chartData={areaData}
          isVert={false}
        ></ReportContent>
        <ReportContent
          title="개폐업 점포 수"
          style={{ width: 0, flexGrow: 1 }}
          chartData={ocData}
        ></ReportContent>
        <ReportContent
          title="프랜차이즈 점포 수"
          style={{ width: 0, flexGrow: 1 }}
          chartData={frData}
        ></ReportContent>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  background: #eef1ee;
  transition: 0.5s;
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
  display: flex;
  gap: 12px;
`;

const ReportAlert = styled.div`
  background: #feffca;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px 20px;
  border-radius: 10px;
`;

export default React.memo(ProfessionalResult);
