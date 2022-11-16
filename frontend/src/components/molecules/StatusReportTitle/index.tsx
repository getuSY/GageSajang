import React from 'react';
import styled from 'styled-components';
import ReportTitle from '../../atoms/ReportTitle';

interface StatusReportTitleProps {
  title: any;
  children?: React.ReactNode;
}

const StatusReportTitle = ({ title, children }: StatusReportTitleProps) => {
  return (
    <Wrapper>
      <ReportTitle title={title} />
      <ReportSummary style={{ marginTop: '1rem' }}>{children}</ReportSummary>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 1.1rem;
  & .summary-div {
    margin-bottom: 3px;
  }

  & span {
    color: red;
    font-weight: 700;
  }
`;

const ReportSummary = styled.div`
  background-color: #ffffff;
  padding: 20px 0px 20px 30px;
  border-left: ${({ theme }) => `3px solid ${theme.mainColor}`};
`;

export default StatusReportTitle;
