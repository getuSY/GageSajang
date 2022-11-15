import React from 'react';
import styled from 'styled-components';
import StatusReportChart from '../StatusReportChart';
import StatusReportTitle from '../StatusReportTitle';
import { useStatusCloseData } from '../../../hooks/status';
import { getMax } from '../../../utils/common';

interface StatusReportCloseProps {
  title?: any;
  closeDetail?: any;
}

const StatusReportClose = ({ title, closeDetail }: StatusReportCloseProps) => {
  const { closeCsData, closeTopData, closeChangeData } =
    useStatusCloseData(closeDetail);
  console.log(closeDetail);
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

      <div className="report-top-div">
        {/* 업종별 폐업률 */}
        <StatusReportChart
          type={closeCsData.type}
          title={'업종별 폐업률'}
          data={closeCsData.data}
          grad={closeCsData.grad}
        />

        {/* 폐업률 높은 상권 Top3 */}
        <StatusReportChart
          type={closeTopData.type}
          title={'폐업률 높은 상권 Top3'}
          data={closeTopData.data}
          grad={closeTopData.grad}
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

export default StatusReportClose;
