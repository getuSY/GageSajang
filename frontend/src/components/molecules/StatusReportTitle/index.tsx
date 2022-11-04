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
      <ReportTitle title={title} />
      <ReportSummary>안녕하세요</ReportSummary>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default StatusReportTitle;
