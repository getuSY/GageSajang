import React from 'react';
import styled from 'styled-components';
import StatusReportTitle from '../../molecules/StatusReportTitle';
import { useStatusSalesData } from '../../../hooks/status';
import ReportContent from '../AmatuerReportContent';
import ReportComment from '../../atoms/ReportComment';
import { numberComma, getMax, getMin, getRate } from '../../../utils/common';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface StatusReportSalesProps {
  title?: { name: string; icon: IconDefinition };
  salesDetail?: any;
}

const StatusReportSales = ({ title, salesDetail }: StatusReportSalesProps) => {
  const {
    salesCsData,
    salesWeekData,
    salesAgeData,
    salesGenderData,
    salesTimeData,
  } = useStatusSalesData(salesDetail);
  return (
    <Wrapper>
      <StatusReportTitle
        // 상세 페이지 내용 //
        title={title}
      >
        <div className="summary-div">
          매출이 가장 높은 업종은 <span>{getMax(salesDetail.cs, 'cs')}</span>{' '}
          입니다.
        </div>
        <div className="summary-div">
          매출 중 성별은 <span>{getMax(salesDetail.gender, 'gender')}</span>의
          비율이 더 높으며, 주 연령대는{' '}
          <span>{getMax(salesDetail.age, 'age')}</span> 입니다.
        </div>
        <div className="summary-div">
          요일은 <span>{getMax(salesDetail.week, 'week')}</span>, 시간대는{' '}
          <span>{getMax(salesDetail.time, 'time')}</span>에 평균 매출이 가장
          높습니다.
        </div>
      </StatusReportTitle>

      <div className="report-div">
        {/* 업종별 매출 */}
        <ReportContent
          title="월 평균 업종별 매출"
          chartData={salesCsData}
          style={{ flexGrow: 1 }}
        >
          <ReportComment>
            외식업{' '}
            <span className="emphasis">
              {numberComma(salesDetail.cs[0])} 원
            </span>
            , 서비스업{' '}
            <span className="emphasis">
              {numberComma(salesDetail.cs[1])} 원
            </span>
            ,
            <br />
            도소매업{' '}
            <span className="emphasis">
              {numberComma(salesDetail.cs[2])} 원
            </span>{' '}
            입니다.
          </ReportComment>
        </ReportContent>

        {/* 성별별 매출 */}
        <ReportContent
          title="성별별 매출"
          chartData={salesGenderData}
          style={{ flexGrow: 1 }}
        >
          <ReportComment>
            남성{' '}
            <span className="emphasis">
              {Math.round(
                getRate([salesDetail.gender[0], salesDetail.gender[1]])[0]
              )}
              %
            </span>
            , 여성{' '}
            <span className="emphasis">
              {Math.round(
                getRate([salesDetail.gender[0], salesDetail.gender[1]])[1]
              )}
              %
            </span>{' '}
            입니다.
          </ReportComment>
        </ReportContent>
      </div>

      <div className="report-div">
        {/* 연령대별 매출 */}
        <ReportContent
          title="연령대별 일 평균 매출 비율"
          chartData={salesAgeData}
          style={{ flexGrow: 1 }}
        >
          <ReportComment>
            <span className="emphasis">{getMax(salesDetail.age, 'age')}</span>
            이(가) 가장 많고,{' '}
            <span className="emphasis">{getMin(salesDetail.age, 'age')}</span>
            이(가) 가장 적습니다.
          </ReportComment>
        </ReportContent>

        {/* 요일별 매출 */}
        <ReportContent
          title="요일별 일 평균 매출 비율"
          chartData={salesWeekData}
          style={{ flexGrow: 1 }}
        >
          <ReportComment>
            <span className="emphasis">{getMax(salesDetail.week, 'week')}</span>
            에 가장 많고,{' '}
            <span className="emphasis">{getMin(salesDetail.week, 'week')}</span>
            에 가장 적습니다.
          </ReportComment>
        </ReportContent>
      </div>

      {/* 시간대별 매출 */}
      <ReportContent
        title="시간대별 매출 비율"
        chartData={salesTimeData}
        style={{ flexGrow: 1 }}
      >
        <ReportComment>
          <span className="emphasis">{getMax(salesDetail.time, 'time')}</span>에
          가장 많고,{' '}
          <span className="emphasis">{getMin(salesDetail.time, 'time')}</span>에
          가장 적습니다.
        </ReportComment>
      </ReportContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & .report-div {
    display: flex;
    gap: 1rem;
  }
`;

export default StatusReportSales;
