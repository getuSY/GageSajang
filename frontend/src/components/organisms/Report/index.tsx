import React from 'react';
import styled from 'styled-components';
import ReportTitle from '../../atoms/ReportTitle';
import ReportSideBar from '../../molecules/ReportSideBar';
import ReportContent from '../../atoms/ReportContent';
import ReportItem from '../../molecules/ReportItem';

const Report = () => {
  return (
    <Wrapper>
      <ReportSideBar />
      <div className="report-content">
        <ReportContent style={{ background: '#FEFFCA', alignItems: 'center' }}>
          ❗ 아래 분석 결과는 통계에 따른 추정 결과입니다. 향후 상황에 따라 다를
          수 있기 때문에, 판단 하에 참고하여 활용하시기 바랍니다.
        </ReportContent>
        <ReportContent style={{ height: '600px' }}>
          <div>💸 매출 분석</div>
        </ReportContent>
        <ReportContent style={{ height: '600px' }}>
          <div>💸 매출 분석</div>
        </ReportContent>
        <ReportContent style={{ height: '600px' }}>
          <div>💸 매출 분석</div>
        </ReportContent>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-grow: 1;
  gap: 10px;
  display: flex;
  padding-right: 10px;
  height: 100%;

  & .report-content {
    flex-grow: 1;
    /* display: flex; */
    /* flex-direction: column; */
    /* gap: 10px; */
    overflow-y: scroll;

    & div + div {
      margin-top: 10px;
    }
  }
`;

export default Report;
