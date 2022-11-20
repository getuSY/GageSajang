import React from 'react';
import styled from 'styled-components';
import StatusReportTitle from '../../molecules/StatusReportTitle';
import { useStatusRpData } from '../../../hooks/status';
import { numberComma, getMax, getMin, getRate } from '../../../utils/common';
import ReportContent from '../AmatuerReportContent';
import ReportComment from '../../atoms/ReportComment';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface StatusReportRPProps {
  title?: { name: string; icon: IconDefinition };
  rpDetail?: any;
}

const StatusReportRP = ({ title, rpDetail }: StatusReportRPProps) => {
  const { rpGenderData, rpAgeData, rpAptData, rpApt2Data } =
    useStatusRpData(rpDetail);

  return (
    <Wrapper>
      <StatusReportTitle
        // 상세 페이지 내용 //
        title={title}
      >
        <div className="summary-div">
          주요 상권의 일 평균 거주인구 수는{' '}
          <span>{numberComma(rpDetail.resident.total)}명</span>
          입니다.
        </div>
        <div className="summary-div">
          성별은 <span>{getMax(rpDetail.resident.gender, 'gender')}</span>의
          비율이 더 높으며, 주 연령대는{' '}
          <span>{getMax(rpDetail.resident.age, 'age')}</span>입니다.
        </div>
        <div className="summary-div">
          평균 가구 수는 <span>{numberComma(rpDetail.resident.house)}가구</span>
          이며, 상권의 아파트 비율은{' '}
          <span>
            {getRate([rpDetail.resident.nonApt, rpDetail.resident.apt])[0]}%
          </span>
          , 상권 배후지의 아파트 비율은{' '}
          <span>{getRate([rpDetail.apt.nonApt, rpDetail.apt.apt])[1]}%</span>{' '}
          입니다.
        </div>
      </StatusReportTitle>

      <div className="report-div">
        {/* 성별별 거주인구 */}
        <ReportContent
          title="일 평균 성별 비"
          chartData={rpGenderData}
          isVert={false}
        >
          <ReportComment>
            남성{' '}
            <span className="emphasis">
              {
                getRate([
                  rpDetail.resident.gender[0],
                  rpDetail.resident.gender[1],
                ])[0]
              }
              %
            </span>
            , 여성{' '}
            <span className="emphasis">
              {
                getRate([
                  rpDetail.resident.gender[0],
                  rpDetail.resident.gender[1],
                ])[1]
              }
              %
            </span>{' '}
            입니다.
          </ReportComment>
        </ReportContent>

        {/* 연령대별 거주인구 */}
        <ReportContent
          title="연령별 평균 거주인구"
          chartData={rpAgeData}
          isVert={false}
          style={{ flexGrow: 1 }}
        >
          {' '}
          <ReportComment>
            <span className="emphasis">
              {getMax(rpDetail.resident.age, 'age')}
            </span>
            이(가) 가장 많고,{' '}
            <span className="emphasis">
              {getMin(rpDetail.resident.age, 'age')}
            </span>
            이(가) 가장 적습니다.
          </ReportComment>
        </ReportContent>
      </div>

      <div className="report-div">
        {/* 상권 아파트/비아파트 비율 */}
        <ReportContent
          title="상권 내 아파트/비아파트 비율"
          chartData={rpAptData}
          isVert={false}
          style={{ flexGrow: 1 }}
        >
          <ReportComment>
            총 가구는{' '}
            <span className="emphasis">
              {numberComma(rpDetail.resident.house)}호
            </span>
            이고, 그 중 아파트는{' '}
            <span className="emphasis">
              {getRate([rpDetail.resident.apt, rpDetail.resident.nonApt])[0]}%
            </span>
            , 비아파트는{' '}
            <span className="emphasis">
              {getRate([rpDetail.resident.apt, rpDetail.resident.nonApt])[1]}%
            </span>{' '}
            입니다.
          </ReportComment>
        </ReportContent>

        {/* 상권배후지 아파트/비아파트 비율 */}
        <ReportContent
          title="상권배후지 내 아파트/비아파트 비율"
          chartData={rpApt2Data}
          isVert={false}
          style={{ flexGrow: 1 }}
        >
          <ReportComment>
            총 가구는{' '}
            <span className="emphasis">
              {numberComma(rpDetail.apt.house)}호
            </span>
            이고, 그 중 아파트는{' '}
            <span className="emphasis">
              {getRate([rpDetail.apt.apt, rpDetail.apt.nonApt])[0]}%
            </span>
            , 비아파트는{' '}
            <span className="emphasis">
              {getRate([rpDetail.apt.apt, rpDetail.apt.nonApt])[1]}%
            </span>{' '}
            입니다.
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

export default StatusReportRP;
