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
  width: 100%;
  height: 73px;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: ${({ select }) => (select ? 900 : 500)};
  font-size: 24px;
  color: ${({ select }) => (select ? '#7579E7' : '#797979')};
  border-bottom: ${({ select }) =>
    select ? '3px solid #7579E7' : '1px solid #797979'};
`;

export default ReportSidebarItem;
