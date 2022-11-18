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
      <div className="status-report-title">
        <ReportTitle title={title} />
        <ReportAlert>
          ❗ 2021년 기준 서울시 행정구별 상권 정보를 확인할 수 있습니다.
        </ReportAlert>
      </div>
      <ReportSummary style={{ marginTop: '1rem' }}>{children}</ReportSummary>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 1.1rem;

  & .status-report-title {
    display: flex;
    align-items: center;
  }

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

const ReportAlert = styled.div`
  background: #feffca;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px 20px;
  border-radius: 10px;
  margin-left: 1rem;
  flex-grow: 1;
`;

export default StatusReportTitle;
