import React from 'react';
import styled from 'styled-components';
import StatusReportChart from '../../molecules/StatusReportChart';
import StatusReportTitle from '../../molecules/StatusReportTitle';
import { useStatusOpenData } from '../../../hooks/status';
import { getMax } from '../../../utils/common';
import ReportContent from '../AmatuerReportContent';
import ReportComment from '../../atoms/ReportComment';

interface StatusReportOpenProps {
  title?: any;
  openDetail?: any;
  region?: string;
}

const StatusReportOpen = ({
  title,
  openDetail,
  region,
}: StatusReportOpenProps) => {
  const { openCsData, openTopData, openChangeData } =
    useStatusOpenData(openDetail);

  console.log(openDetail);
  return (
    <Wrapper>
      <StatusReportTitle
        // 상세 페이지 내용 //
        title={title}
      >
        <div className="summary-div">
          연평균 개업률은 <span>{openDetail.open.total}%</span> 입니다.
        </div>
        <div className="summary-div">
          가장 많이 개업하는 업종은{' '}
          <span>{getMax(openDetail.open.cs, 'cs')}</span>
          이며, <span>광화문광장</span>의 개업률이 가장 높습니다.
        </div>
        <div className="summary-div">
          상권변화지표는 <span>{openDetail.change}</span>입니다.
        </div>
      </StatusReportTitle>

      <div className="report-div">
        {/* 업종별 개업률 */}
        <ReportContent
          title="업종별 개업률"
          chartData={openCsData}
          style={{ flexGrow: 1 }}
        >
          <ReportComment>
            <span className="dongName">{region}</span>의 ~~~는{' '}
            <span className="emphasis">
              {getMax(openCsData.data.datasets[0].data, 'quarter')}
            </span>
            가 ~~~
          </ReportComment>
        </ReportContent>

        {/* 개업률 높은 상권 Top3 */}
        <ReportContent
          title="개업률 높은 상권 Top3"
          chartData={openTopData}
          style={{ flexGrow: 1 }}
        >
          {' '}
          <ReportComment>
            <span className="dongName">{region}</span>의 ~~~는{' '}
            <span className="emphasis">
              {getMax(openTopData.data.datasets[0].data, 'quarter')}
            </span>
            가 ~~~~
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

export default StatusReportOpen;
