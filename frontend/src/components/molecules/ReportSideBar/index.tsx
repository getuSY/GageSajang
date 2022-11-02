import React from 'react';
import styled from 'styled-components';
import ReportSidebarItem from '../../atoms/ReportSidebarItem';

const arr = ['매출 분석', '유동 인구', '업종 분석'];

const ReportSideBar = () => {
  return (
    <Wrapper>
      {arr.map((e, i) => (
        <ReportSidebarItem content={e} select={i === 0} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  background: #ffffff;
  padding: 0 20px;
  width: 230px;
`;

export default ReportSideBar;
