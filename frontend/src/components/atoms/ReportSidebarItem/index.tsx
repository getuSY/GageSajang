import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ReportSidebarItemProps {
  content: any;
  select?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const ReportSidebarItem = ({
  content,
  select,
  onClick,
}: ReportSidebarItemProps) => {
  const { icon, name } = content;
  return (
    <Wrapper select={select} onClick={onClick}>
      <div className="icon-div">
        <FontAwesomeIcon icon={icon} />
      </div>
      {name}
    </Wrapper>
  );
};

interface WrapperProps {
  select?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  padding: 8px 8px;
  border-radius: 5px;

  margin: 4px 0;
  /* height: 73px; */
  /* justify-content: center; */
  /* font-weight: ${({ select }) => (select ? 900 : 500)}; */
  cursor: ${({ select }) => (select ? '' : 'pointer')};
  &:hover {
    background: #001aa4;
  }
  font-size: 1.3rem;
  background: ${({ select }) => (select ? '#001AA4' : 'transparent')};

  /* border-bottom: ${({ select }) =>
    select ? '3px solid #7579E7' : '1px solid #797979'}; */
`;

export default ReportSidebarItem;
