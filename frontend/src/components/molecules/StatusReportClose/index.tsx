import React from 'react';
import styled from 'styled-components';
import StatusReportChart from '../StatusReportChart';
import StatusReportTitle from '../StatusReportTitle';
import { useStatusCloseData } from '../../../hooks/status';
import { getMax } from '../../../utils/common';
import ReportContent from '../AmatuerReportContent';
import ReportComment from '../../atoms/ReportComment';

interface StatusReportCloseProps {
  title?: any;
  closeDetail?: any;
  region?: string;
}

const StatusReportClose = ({
  title,
  closeDetail,
  region,
}: StatusReportCloseProps) => {
  const { closeCsData, closeTopData, closeChangeData } =
    useStatusCloseData(closeDetail);
  return (
    <Wrapper>
      <StatusReportTitle
        // 상세 페이지 내용 //
        title={title}
      >
        <div className="summary-div">
          연평균 폐업률은 <span>{closeDetail.close.total}%</span> 입니다.
        </div>
        <div className="summary-div">
          가장 많이 폐업하는 업종은{' '}
          <span>{getMax(closeDetail.close.cs, 'cs')}</span>
          이며, <span>{closeDetail.close.top3[0].name}</span>의 폐업률이 가장
          높습니다.
        </div>
        <div className="summary-div">
          상권변화지표는 <span>{closeDetail.change}</span>입니다.
        </div>
      </StatusReportTitle>

      <div className="report-div">
        {/* 업종별 폐업률 */}
        <ReportContent
          title="업종별 폐업률"
          chartData={closeCsData}
          style={{ flexGrow: 1 }}
        >
          <ReportComment>
            <span className="dongName">{region}</span>의 ~~~는{' '}
            <span className="emphasis">~~~~</span>가 ~~~~
          </ReportComment>
        </ReportContent>

        {/* 폐업률 높은 상권 Top3 */}
        <ReportContent
          title="폐업률 높은 상권 Top3"
          chartData={closeTopData}
          style={{ flexGrow: 1 }}
        >
          <ReportComment>
            <span className="dongName">{region}</span>의 ~~~는{' '}
            <span className="emphasis">~~~~</span>가 ~~~~
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

export default StatusReportClose;
