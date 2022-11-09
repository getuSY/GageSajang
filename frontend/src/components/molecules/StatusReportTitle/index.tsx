import React from 'react';
import styled from 'styled-components';
import ReportTitle from '../../atoms/ReportTitle';

interface StatusReportTitleProps {
  title: any;
}

const StatusReportTitle = ({ title }: StatusReportTitleProps) => {
  return (
    <Wrapper>
      <ReportTitle
        title={title}
        style={{
          marginTop: '1rem',
          marginLeft: '1rem',
        }}
      />
      <ReportSummary style={{ margin: '1rem' }}>
        <div className="summary-div">
          분기별 평균 유동인구 수는 <span>32,000</span>명 입니다.
        </div>
        <div className="summary-div">
          성별은 <span>여성</span>의 비율이 더 높으며, 주 연령대는{' '}
          <span>60대 이상</span>입니다.
        </div>
        <div className="summary-div">
          분기는 <span>3분기</span>, 요일은 <span>월요일</span>, 시간대는{' '}
          <span>00~06시</span>에 유동인구가 가장 많습니다.
        </div>
      </ReportSummary>
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
  background-color: #f4f4f4;
  padding: 20px 0px 20px 30px;
  border-left: ${({ theme }) => `3px solid ${theme.darkColor}`};
  /* width: 700px; */
`;

export default StatusReportTitle;
