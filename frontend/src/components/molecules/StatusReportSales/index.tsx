import React from 'react';
import styled from 'styled-components';
import StatusReportChart from '../../molecules/StatusReportChart';
import StatusReportTitle from '../../molecules/StatusReportTitle';
import { useStatusSalesData } from '../../../hooks/status';
import { getMax } from '../../../utils/common';
import ReportContent from '../AmatuerReportContent';
import ReportComment from '../../atoms/ReportComment';

interface StatusReportSalesProps {
  title?: any;
  salesDetail?: any;
  region?: string;
}

const StatusReportSales = ({
  title,
  salesDetail,
  region,
}: StatusReportSalesProps) => {
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
          title="업종별 매출"
          chartData={salesCsData}
          style={{ flexGrow: 1 }}
        >
          <ReportComment>
            <span className="dongName">{region}</span>의 ~~~는{' '}
            <span className="emphasis">~~~~</span>가 ~~~~
          </ReportComment>
        </ReportContent>

        {/* 요일별 매출 */}
        <ReportContent
          title="요일별 매출"
          chartData={salesWeekData}
          style={{ flexGrow: 1 }}
        >
          <ReportComment>
            <span className="dongName">{region}</span>의 ~~~는{' '}
            <span className="emphasis">~~~~</span>가 ~~~~
          </ReportComment>
        </ReportContent>
      </div>

      <div className="report-div">
        {/* 연령대별 매출 */}
        <ReportContent
          title="연령대별 매출"
          chartData={salesAgeData}
          style={{ flexGrow: 1 }}
        >
          <ReportComment>
            <span className="dongName">~~~</span>의 ~~~는{' '}
            <span className="emphasis">~~~~</span>가 ~~~~
          </ReportComment>
        </ReportContent>

        {/* 성별별 매출 */}
        <ReportContent
          title="성별별 매출"
          chartData={salesGenderData}
          style={{ flexGrow: 1 }}
        >
          <ReportComment>
            <span className="dongName">~~~</span>의 ~~~는{' '}
            <span className="emphasis">~~~~</span>가 ~~~~
          </ReportComment>
        </ReportContent>
      </div>

      {/* 시간대별 매출 */}
      <ReportContent
        title="시간대별 매출"
        chartData={salesTimeData}
        style={{ flexGrow: 1 }}
      >
        <ReportComment>
          <span className="dongName">~~~</span>의 ~~~는{' '}
          <span className="emphasis">~~~~</span>가 ~~~~
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
