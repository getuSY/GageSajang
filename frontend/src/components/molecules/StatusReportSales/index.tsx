import React from 'react';
import styled from 'styled-components';
import StatusReportChart from '../../molecules/StatusReportChart';
import StatusReportTitle from '../../molecules/StatusReportTitle';
import { useStatusSalesData } from '../../../hooks/status';
import { getMax } from '../../../utils/common';

interface StatusReportSalesProps {
  title?: any;
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

      <div className="report-top-div">
        {/* 업종별 매출 */}
        <StatusReportChart
          type={salesCsData.type}
          title={'업종별 매출'}
          data={salesCsData.data}
          grad={salesCsData.grad}
        />

        {/* 요일별 매출 */}
        <StatusReportChart
          type={salesWeekData.type}
          title={'요일별 매출'}
          data={salesWeekData.data}
          grad={salesWeekData.grad}
        />
      </div>

      <div className="report-middle-div">
        {/* 연령대별 매출 */}
        <StatusReportChart
          type={salesAgeData.type}
          title={'연령대별 매출'}
          data={salesAgeData.data}
          grad={salesAgeData.grad}
        />

        {/* 성별별 매출 */}
        <StatusReportChart
          type={salesGenderData.type}
          title={'성별별 매출'}
          data={salesGenderData.data}
          options={salesGenderData.options}
          grad={salesGenderData.grad}
        />
      </div>

      {/* 시간대별 매출 */}
      <StatusReportChart
        type={salesTimeData.type}
        title={'시시간대별 매출'}
        data={salesTimeData.data}
        grad={salesTimeData.grad}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 3000px;
  overflow-y: scroll;
  & .report-top-div {
    display: flex;
    gap: 2rem;
    width: 100%;
    & > div {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default StatusReportSales;
