import React from 'react';
import styled from 'styled-components';
import StatusReportChart from '../../molecules/StatusReportChart';
import StatusReportTitle from '../../molecules/StatusReportTitle';
import { useStatusOpenData } from '../../../hooks/status';
import { getMax } from '../../../utils/common';

interface StatusReportOpenProps {
  title?: any;
  openDetail?: any;
}

const StatusReportOpen = ({ title, openDetail }: StatusReportOpenProps) => {
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

      <div className="report-top-div">
        {/* 업종별 개업률 */}
        <StatusReportChart
          type={openCsData.type}
          title={'업종별 개업률 '}
          data={openCsData.data}
          grad={openCsData.grad}
        />

        {/* 개업률 높은 상권 Top3 */}
        <StatusReportChart
          type={openTopData.type}
          title={'개업률 높은 상권 Top3'}
          data={openTopData.data}
          grad={openTopData.grad}
        />
      </div>
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

export default StatusReportOpen;
