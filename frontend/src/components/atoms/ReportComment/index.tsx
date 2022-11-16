import React from 'react';
import styled from 'styled-components';

interface ReportCommentProps {
  children?: React.ReactNode;
  style?: any;
}

const ReportComment = ({ children, style }: ReportCommentProps) => {
  return <Wrapper style={style}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  & .jobName,
  .dongName {
    font-weight: 700;
  }
  & .emphasis {
    font-weight: 700;
    color: #ff0000;
  }
`;

export default ReportComment;
