import React from 'react';
import styled from 'styled-components';
import StatusReportTitle from '../../molecules/StatusReportTitle';
import { useStatusFpData } from '../../../hooks/status';
import { numberComma, getMax, getMin, getRate } from '../../../utils/common';
import ReportContent from '../AmatuerReportContent';
import ReportComment from '../../atoms/ReportComment';

interface StatusReportFPProps {
  title?: any;
  fpDetail?: any;
  region?: string;
}

const StatusReportFP = ({ title, fpDetail, region }: StatusReportFPProps) => {
  const { fpGenderData, fpAgeData, fpQuaterData, fpWeekData, fpTimeData } =
    useStatusFpData(fpDetail);

  return (
    <Wrapper>
      <StatusReportTitle
        // 상세 페이지 내용 //
        title={title}
      >
        <div className="summary-div">
          일 평균 유동인구 수는{' '}
          <span>{numberComma(Math.floor(fpDetail.total / 90))}명</span>
          입니다.
        </div>
        <div className="summary-div">
          성별은 <span>{getMax(fpDetail.gender, 'gender')}</span>의 비율이 더
          높으며, 주 연령대는 <span>{getMax(fpDetail.age, 'age')}</span>입니다.
        </div>
        <div className="summary-div">
          분기는 <span>{getMax(fpDetail.quarter, 'quarter')}</span>, 요일은{' '}
          <span>{getMax(fpDetail.week, 'week')}</span>, 시간대는{' '}
          <span>{getMax(fpDetail.time, 'time')}</span>에 유동인구가 가장
          많습니다.
        </div>
      </StatusReportTitle>

      <div className="report-div">
        {/* 일 평균 유동인구 */}
        <ReportContent
          title="일 평균 유동인구"
          chartData={fpQuaterData}
          style={{ flexGrow: 1 }}
          chartStyle={{ width: '650px' }}
        >
          {' '}
          <ReportComment>
            <span className="dongName">{region}</span>의 유동인구는{' '}
            <span className="emphasis">
              {getMax(fpDetail.quarter, 'quarter')}
            </span>
            에 가장 많고,{' '}
            <span className="emphasis">
              {getMin(fpDetail.quarter, 'quarter')}
            </span>
            에 가장 적습니다.
          </ReportComment>
        </ReportContent>
      </div>

      <div className="report-div">
        {/* 성별별 유동인구 */}
        <ReportContent
          title="일 평균 성별 비"
          chartData={fpGenderData}
          style={{ flexGrow: 1 }}
        >
          {' '}
          <ReportComment>
            남성{' '}
            <span className="emphasis">
              {Math.round(getRate([fpDetail.gender[0], fpDetail.gender[1]])[0])}
              %
            </span>
            , 여성{' '}
            <span className="emphasis">
              {Math.round(getRate([fpDetail.gender[0], fpDetail.gender[1]])[1])}
              %
            </span>{' '}
            입니다.
          </ReportComment>
        </ReportContent>
        {/* 연령대별 유동인구 */}
        <ReportContent
          title="연령별 일 평균 유동인구"
          chartData={fpAgeData}
          style={{ flexGrow: 1 }}
          isVert={false}
        >
          {' '}
          <ReportComment>
            <span className="emphasis">{getMax(fpDetail.age, 'age')}</span>
            이(가) 가장 많고,{' '}
            <span className="emphasis">{getMin(fpDetail.age, 'age')}</span>
            이(가) 가장 적습니다.
          </ReportComment>
        </ReportContent>
      </div>
      <div className="report-div">
        {/* 요일별 유동인구 */}
        <ReportContent
          title="요일별 일 평균 유동인구"
          chartData={fpWeekData}
          style={{ flexGrow: 1 }}
        >
          {' '}
          <ReportComment>
            <span className="emphasis">{getMax(fpDetail.week, 'week')}</span>에
            가장 많고,{' '}
            <span className="emphasis">{getMin(fpDetail.week, 'week')}</span>에
            가장 적습니다.
          </ReportComment>
        </ReportContent>

        {/* 시간대별 유동인구 */}
        <ReportContent
          title="시간대별 일 평균 유동인구"
          chartData={fpTimeData}
          style={{ flexGrow: 1 }}
        >
          {' '}
          <ReportComment>
            <span className="emphasis">{getMax(fpDetail.time, 'time')}</span>에
            가장 많고,{' '}
            <span className="emphasis">{getMin(fpDetail.time, 'time')}</span>에
            가장 적습니다.
          </ReportComment>
        </ReportContent>
      </div>
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

export default StatusReportFP;
