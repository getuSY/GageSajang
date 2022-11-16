import React from 'react';
import styled from 'styled-components';
import StatusReportChart from '../../molecules/StatusReportChart';
import StatusReportTitle from '../../molecules/StatusReportTitle';
import { useStatusRpData } from '../../../hooks/status';
import { numberComma, getMax, getRate } from '../../../utils/common';
import ReportContent from '../AmatuerReportContent';
import ReportComment from '../../atoms/ReportComment';

interface StatusReportRPProps {
  title?: any;
  rpDetail?: any;
  region?: string;
}

const StatusReportRP = ({ title, rpDetail, region }: StatusReportRPProps) => {
  const { rpGenderData, rpAgeData, rpAptData } = useStatusRpData(rpDetail);
  return (
    <Wrapper>
      <StatusReportTitle
        // 상세 페이지 내용 //
        title={title}
      >
        <div className="summary-div">
          연평균 거주인구 수는 <span>{numberComma(rpDetail.total)}명</span>
          입니다.
        </div>
        <div className="summary-div">
          성별은 <span>{getMax(rpDetail.gender, 'gender')}</span>의 비율이 더
          높으며, 주 연령대는 <span>{getMax(rpDetail.age, 'age')}</span>입니다.
        </div>
        <div className="summary-div">
          연평균 가구 수는 <span>{numberComma(rpDetail.house)}가구</span>이며,
          상권의 아파트 비율은{' '}
          <span>{getRate([rpDetail.nonApt, rpDetail.apt])[0]}%</span>,
          {/* 수정해야 함 */}
          상권 배후지의 아파트 비율은
          <span>{getRate([rpDetail.nonApt, rpDetail.apt])[1]}%</span> 입니다.
        </div>
      </StatusReportTitle>

      <div className="report-div">
        {/* 성별별 거주인구 */}
        <ReportContent
          title="거주인구 평균 성별 비(분기 기준)"
          chartData={rpGenderData}
          isVert={false}
        >
          {' '}
          <ReportComment>
            <span className="dongName">{region}</span>의 유동인구는{' '}
            <span className="emphasis">
              {getMax(rpGenderData.data.datasets[0].data, 'quarter')}
            </span>
            가 가장 많습니다.
          </ReportComment>
        </ReportContent>

        {/* 연령대별 거주인구 */}
        <ReportContent
          title="연령별 평균 거주인구(분기 기준)"
          chartData={rpAgeData}
          isVert={false}
          style={{ flexGrow: 1 }}
        >
          {' '}
          <ReportComment>
            <span className="dongName">{region}</span>의 유동인구는{' '}
            <span className="emphasis">xxx</span>가 가장 많습니다.
          </ReportComment>
        </ReportContent>
      </div>

      {/* 아파트/비아파트 비율 */}
      <ReportContent
        title="아파트/비아파트 비율"
        chartData={rpAptData}
        isVert={false}
        style={{ flexGrow: 1 }}
      >
        {' '}
        <ReportComment>
          <span className="dongName">{region}</span>의 유동인구는{' '}
          <span className="emphasis">
            {getMax(rpAptData.data.datasets[0].data, 'quarter')}
          </span>
          가 가장 많습니다.
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

export default StatusReportRP;
