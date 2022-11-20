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
  useProfessionalSimulationData,
} from '../../../hooks/professional';
import SalesSimulation from '../SalesSimulation';
import { numberComma, getRate, getProRate } from '../../../utils/common';

interface ProfessionalResultProps {
  storeInfo: ProfessionalResultParams;
  professionalResult: any;
}

const ProfessionalResult = ({
  storeInfo,
  professionalResult,
}: ProfessionalResultProps) => {
  const { areaData, salesData, clerkData, frData, ocData } =
    useProfessionalData(professionalResult);
  const { sales, clerk, area, dongName, industryName } = storeInfo;
  const simulData = useProfessionalSimulationData({
    dongName,
    industryName,
    quarter: 4,
    value: sales,
    year: 2022,
  });

  console.log(professionalResult);

  const salesRate = getProRate(sales, professionalResult.sales.sales); // 매출 배교
  const openRate = getRate([
    professionalResult.status.open,
    professionalResult.store.total,
  ])[0];
  const closeRate = getRate([
    professionalResult.status.close,
    professionalResult.store.total,
  ])[0];
  const clerkRate = clerk / professionalResult.store.clerk;
  const areaRate = getProRate(area, professionalResult.store.area);

  return (
    <Wrapper>
      <ReportContent
        style={{ fontFamily: 'GmarketSansMedium', alignItems: 'start' }}
      >
        <div>
          <TitleHighlight>&#60; {dongName} &#62;</TitleHighlight>의 &nbsp;
          <TitleHighlight>[ {industryName} ]</TitleHighlight> 평균값을 토대로
          분석한 결과입니다.
        </div>
      </ReportContent>
      <ReportAlert>
        ❗ 아래 분석 결과는 통계에 따른 추정 결과입니다. 향후 상황에 따라 다를
        수 있기 때문에, 판단 하에 참고하여 활용하시기 바랍니다.
      </ReportAlert>
      <Summary style={{ marginBottom: '3rem' }}>
        {/* 매출 비교 */}
        <SummaryItem
          title="매출 비교"
          style={{ width: 0, flexGrow: 1 }}
          iconSrc="/assets/icons/sales.png"
        >
          <div>
            {salesRate > 0 && (
              <>
                평균보다 <Highlight>{numberComma(salesRate)} %</Highlight> 더{' '}
              </>
            )}
            {salesRate === 0 && (
              <>
                평균 월 매출과 <Highlight>비슷하게</Highlight>{' '}
              </>
            )}
            {salesRate < 0 && (
              <>
                평균보다{' '}
                <Highlight>{numberComma(Math.abs(salesRate))} %</Highlight> 적게{' '}
              </>
            )}
            벌고 있습니다.
          </div>
        </SummaryItem>

        {/* 평균 매출 건수 */}
        <SummaryItem
          title="월 평균 매출 건수"
          style={{ width: 0, flexGrow: 1 }}
          iconSrc="/assets/icons/salesCnt.png"
        >
          <div>
            약{' '}
            <Highlight>
              {numberComma(Math.round(professionalResult.sales.order / 3))} 건
            </Highlight>{' '}
            입니다.
          </div>
        </SummaryItem>
        <SummaryItem
          title="개폐업률"
          style={{ width: 0, flexGrow: 1 }}
          iconSrc="/assets/icons/openClose.png"
        >
          <div>
            개업률은 <Highlight>{numberComma(openRate)} %</Highlight> 입니다.
            <br /> 폐업률은 <Highlight>
              {numberComma(closeRate)} %
            </Highlight>{' '}
            입니다.
          </div>
        </SummaryItem>
        <SummaryItem
          title="가게 면적 비교"
          style={{ width: 0, flexGrow: 1 }}
          iconSrc="/assets/icons/store.png"
        >
          <div>
            {areaRate > 0 && (
              <div className="cardBody">
                평균 대비 <Highlight>{numberComma(areaRate)}%</Highlight>{' '}
                넓습니다.
              </div>
            )}
            {areaRate === 0 && (
              <div className="cardBody">
                평균 면적과 거의 <Highlight>비슷해요!</Highlight>
              </div>
            )}
            {areaRate < 0 && (
              <div className="cardBody">
                평균 대비{' '}
                <Highlight>{numberComma(Math.abs(areaRate))}%</Highlight>{' '}
                좁습니다.
              </div>
            )}
          </div>
        </SummaryItem>
        <SummaryItem
          title="직원 수 비교"
          style={{ width: 0, flexGrow: 1 }}
          iconSrc="/assets/icons/clerk.png"
        >
          <div>
            {clerkRate > 1 && (
              <div className="cardBody">
                평균보다 <Highlight>{clerkRate} 배</Highlight> 더 고용하고
                있습니다.
              </div>
            )}
            {clerkRate === 1 && (
              <div className="cardBody">
                <Highlight>평균만큼</Highlight> 고용하고 있습니다.
              </div>
            )}
            {clerkRate < 1 && (
              <div className="cardBody">
                평균보다 <Highlight>{clerkRate} 배</Highlight> 적게 고용하고
                있습니다.
              </div>
            )}
          </div>
        </SummaryItem>
      </Summary>

      <div className="chart-div">
        <ReportContent
          title="평균 월 매출"
          style={{ width: 0, flexGrow: 1 }}
          chartData={salesData}
        ></ReportContent>
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
            {numberComma(professionalResult.sales.order)} 건
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
      {simulData.isSuccess && (
        <>
          <SalesSimulation values={simulData.data.sales} name="매출" />
          <SalesSimulation values={simulData.data.count} name="점포 수" />
          <SalesSimulation values={simulData.data.job} name="직장인구" />
          <SalesSimulation values={simulData.data.life} name="유동인구" />
          <SalesSimulation values={simulData.data.resident} name="거주인구" />
        </>
      )}
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

const TitleHighlight = styled.span`
  color: #1ca37c;
  font-size: 1.3rem;
  font-weight: 600;
`;

const Highlight = styled.span`
  color: red;
  font-size: 22px;
  font-weight: 600;
`;

export default React.memo(ProfessionalResult);
