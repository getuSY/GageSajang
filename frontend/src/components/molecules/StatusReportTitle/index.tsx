import React from 'react';
import styled from 'styled-components';
import ReportSummary from '../../atoms/ReportSummary';
import ReportTitle from '../../atoms/ReportTitle';

interface StatusReportTitleProps {}

const StatusReportTitle = ({}: StatusReportTitleProps) => {
  return (
    <Wrapper>
      <ReportTitle>유동인구</ReportTitle>
      <ReportSummary>안녕하세요</ReportSummary>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default StatusReportTitle;
