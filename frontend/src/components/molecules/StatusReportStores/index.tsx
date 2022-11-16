import React from 'react';
import styled from 'styled-components';
import StatusReportChart from '../../molecules/StatusReportChart';
import StatusReportTitle from '../../molecules/StatusReportTitle';
import { useStatusStoreData } from '../../../hooks/status';
import { numberComma, getMax } from '../../../utils/common';
import ReportContent from '../AmatuerReportContent';
import ReportComment from '../../atoms/ReportComment';

interface StatusReportStoresProps {
  title?: any;
  storesDetail?: any;
  region?: string;
}

const StatusReportStores = ({
  title,
  storesDetail,
  region,
}: StatusReportStoresProps) => {
  const { storeCsData, storeDivData } = useStatusStoreData(storesDetail);
  return (
    <Wrapper>
      <StatusReportTitle
        // 상세 페이지 내용 //
        title={title}
      >
        <div className="summary-div">
          연 평균 점포 수는 <span>{numberComma(storesDetail.total)}개소</span>
          입니다.
        </div>
        <div className="summary-div">
          주요 업종은 <span>{getMax(storesDetail.cs, 'cs')}</span>이고,{' '}
          <span>{getMax(storesDetail.div, 'div')}</span>
          이(가){' '}
          <span>{numberComma(Math.max.apply(Math, storesDetail.div))}개소</span>
          로 가장 많습니다.
        </div>
        <div className="summary-div">
          점포 수가 가장 많은 업종은{' '}
          <span>
            외식업 : {storesDetail.cs1Top3[0]}, 서비스업 :{' '}
            {storesDetail.cs2Top3[0]}, 도소매업 :{storesDetail.cs3Top3[0]}
          </span>{' '}
          입니다.
        </div>
      </StatusReportTitle>
      <div className="report-div">
        {/* 업종별 점포 수 */}
        <ReportContent
          title="업종별 점포 수"
          chartData={storeCsData}
          style={{ flexGrow: 1 }}
        >
          <ReportComment>
            <span className="dongName">{region}</span>의 유동인구는{' '}
            <span className="emphasis">ascsc</span>가 가장 많습니다.
          </ReportComment>
        </ReportContent>

        {/* 상권 구분별 점포 수 */}
        <ReportContent
          title="상권 구분별 점포 수"
          chartData={storeDivData}
          style={{ flexGrow: 1 }}
        >
          {' '}
          <ReportComment>
            <span className="dongName">{region}</span>의 유동인구는{' '}
            <span className="emphasis">asvas</span>가 가장 많습니다.
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

export default StatusReportStores;
