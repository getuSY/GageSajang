import React from 'react';
import styled from 'styled-components';
import ReportSummary from '../../atoms/ReportSummary';
import ReportTitle from '../../atoms/ReportTitle';

interface StatusReportTitleProps {
  title: any;
}

const StatusReportTitle = ({ title }: StatusReportTitleProps) => {
  return (
    <Wrapper>
      <ReportTitle
        title={title}
        style={{ marginTop: '1rem', marginLeft: '1rem' }}
      />
      <ReportSummary style={{ margin: '2rem 8rem' }}>
        <div>총 인구는 몇명입니다.</div>
        <div>유동인구는 3명입니다.</div>
        <div>2022년 12월 31일 점포 수는 3,229개입니다.</div>
      </ReportSummary>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default StatusReportTitle;
