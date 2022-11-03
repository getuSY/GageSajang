import React from 'react';
import styled from 'styled-components';
import ReportSidebarItem from '../../atoms/ReportSidebarItem';

const arr = ['매출 분석', '유동 인구', '업종 분석'];

const ReportSideBar = () => {
  return (
    <Wrapper>
      <div className="title">🏪 상권 분석</div>
      {arr.map((e, i) => (
        <ReportSidebarItem content={e} select={i === 0} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  background: #0066ff;
  padding: 20px;
  font-size: 1.4rem;
  border-radius: 20px;
  width: 230px;
  color: white;
  & .title {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }
`;

export default ReportSideBar;
