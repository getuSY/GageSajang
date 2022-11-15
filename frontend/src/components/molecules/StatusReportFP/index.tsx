import React from 'react';
import styled from 'styled-components';
import StatusReportChart from '../../molecules/StatusReportChart';
import StatusReportTitle from '../../molecules/StatusReportTitle';
import { useStatusFpData } from '../../../hooks/status';
import StatusReportDescription from '../../molecules/StatusReportDescription';
import { numberComma, getMax } from '../../../utils/common';

const reportDescription = [
  {
    title: '제목1',
    content: '내용1내용1',
  },
  {
    title: '제목2',
    content: '내용2내용2',
  },
  {
    title: '제목3',
    content: '내용3내용3',
  },
];

interface StatusReportFPProps {
  title?: any;
  fpDetail?: any;
}

const StatusReportFP = ({ title, fpDetail }: StatusReportFPProps) => {
  const { fpGenderData, fpAgeData, fpQuaterData, fpWeekData, fpTimeData } =
    useStatusFpData(fpDetail);

  return (
    <Wrapper>
      <StatusReportTitle
        // 상세 페이지 내용 //
        title={title}
      >
        <div className="summary-div">
          분기별 평균 유동인구 수는 <span>{numberComma(fpDetail.total)}명</span>
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

      <div className="report-top-div">
        {/* 성별별 유동인구 */}
        <StatusReportChart
          type={fpGenderData.type}
          title={'유동인구 평균 성별 비(분기 기준)'}
          data={fpGenderData.data}
          options={fpGenderData.options}
          style={{
            padding: '20px',
          }}
          grad={fpGenderData.grad}
        />
        <StatusReportDescription descriptionList={reportDescription} />
      </div>

      {/* 분기별 유동인구 */}
      <StatusReportChart
        type="bar"
        title={'분기별 평균 유동인구'}
        data={fpQuaterData.data}
        style={{
          // background: 'linear-gradient(90deg, #54BEF9 0%, #715DE9 100%)',
          padding: '20px',
          borderRadius: '10px',
        }}
        grad={fpQuaterData.grad}
        isVert={false}
      />

      <div className="report-middle-div">
        {/* 연령대별 유동인구 */}
        <StatusReportChart
          type={fpAgeData.type}
          title={'연령별 평균 유동인구(분기 기준)'}
          data={fpAgeData.data}
          grad={fpAgeData.grad}
        />
      </div>

      {/* 요일별 유동인구 */}
      <StatusReportChart
        type={fpWeekData.type}
        title={'요일별 평균 유동인구(분기 기준)'}
        data={fpWeekData.data}
        grad={fpWeekData.grad}
      />

      {/* 시간대별 유동인구 */}
      <StatusReportChart
        type="line"
        title={'시간대별 평균 유동인구(분기 기준)'}
        data={fpTimeData.data}
        grad={fpTimeData.grad}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 3000px;
  overflow-y: scroll;
  & .report-top-div {
    display: flex;
    width: 100%;
    & > div {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default StatusReportFP;
