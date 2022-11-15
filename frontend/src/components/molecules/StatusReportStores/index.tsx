import React from 'react';
import styled from 'styled-components';
import StatusReportChart from '../../molecules/StatusReportChart';
import StatusReportTitle from '../../molecules/StatusReportTitle';
import { useStatusStoreData } from '../../../hooks/status';
import { numberComma, getMax } from '../../../utils/common';

interface StatusReportStoresProps {
  title?: any;
  storesDetail?: any;
}

const StatusReportStores = ({
  title,
  storesDetail,
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
      <div className="report-top-div">
        {/* 업종별 점포 수 */}
        <StatusReportChart
          type={storeCsData.type}
          title={'업종별 점포 수'}
          data={storeCsData.data}
          grad={storeCsData.grad}
        />

        {/* 상권 구분별 점포 수 */}
        <StatusReportChart
          type={storeDivData.type}
          title={'상권 구분별 점포 수'}
          data={storeDivData.data}
          grad={storeDivData.grad}
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

export default StatusReportStores;
