import React from 'react';
import styled from 'styled-components';

interface ReportSidebarItemProps {
  content: string;
  select?: boolean;
}

const ReportSidebarItem = ({ content, select }: ReportSidebarItemProps) => {
  return <Wrapper select={select}>{content}</Wrapper>;
};

interface WrapperProps {
  select?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  padding: 8px 8px;
  border-radius: 5px;
  /* height: 73px; */
  /* justify-content: center; */
  /* font-weight: ${({ select }) => (select ? 900 : 500)}; */
  font-size: 1.3rem;
  background: ${({ select }) => (select ? '#001AA4' : 'transparent')};
  /* border-bottom: ${({ select }) =>
    select ? '3px solid #7579E7' : '1px solid #797979'}; */
`;

export default ReportSidebarItem;
