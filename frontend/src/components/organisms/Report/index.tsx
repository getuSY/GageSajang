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
        <ReportTitle>hi</ReportTitle>
        <ReportContent>
          ❗ 아래 분석 결과는 통계에 따른 추정 결과입니다. 향후 상황에 따라 다를
          수 있기 때문에, 판단 하에 참고하여 활용하시기 바랍니다.
        </ReportContent>
        <ReportItem />
        <ReportItem />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-grow: 1;
  gap: 10px;
  display: flex;

  & .report-content {
    flex-grow: 1;
    height: calc(100vh - 156px);
    overflow-y: scroll;
    gap: 10px;
    /* & div + div {
      margin-top: 10px;
    } */
    & div {
      margin-bottom: 10px;
    }
  }
`;

export default Report;
