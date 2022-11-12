import React from 'react';
import styled from 'styled-components';
import ReportContent from '../../atoms/ReportContent';

const ReportItem = () => {
  return (
    <ReportContent>
      <Wrapper>
        <div>💸 매출 분석</div>
      </Wrapper>
    </ReportContent>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 20px 0;
  flex-direction: column;
  min-height: 500px;
  height: 600px;
`;

export default ReportItem;
