import React from 'react';
import styled from 'styled-components';
import StatusReportChart from '../../molecules/StatusReportChart';
import StatusReportTitle from '../../molecules/StatusReportTitle';
import { useStatusRpData } from '../../../hooks/status';
import { numberComma, getMax, getRate } from '../../../utils/common';

interface StatusReportRPProps {
  title?: any;
  rpDetail?: any;
}

const StatusReportRP = ({ title, rpDetail }: StatusReportRPProps) => {
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

      <div className="report-top-div">
        {/* 성별별 거주인구 */}
        <StatusReportChart
          type={rpGenderData.type}
          title={'거주인구 평균 성별 비(분기 기준)'}
          data={rpGenderData.data}
          options={rpGenderData.options}
          grad={rpGenderData.grad}
        />

        {/* 연령대별 거주인구 */}
        <StatusReportChart
          type={rpAgeData.type}
          title={'연령별 평균 거주인구(분기 기준)'}
          data={rpAgeData.data}
          grad={rpAgeData.grad}
        />
      </div>

      {/* 아파트/비아파트 비율 */}
      <StatusReportChart
        type={rpAptData.type}
        title={'아파트/비아파트 비율'}
        data={rpAptData.data}
        grad={rpAptData.grad}
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

export default StatusReportRP;
