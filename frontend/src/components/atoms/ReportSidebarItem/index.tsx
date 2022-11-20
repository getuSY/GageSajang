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
      <div>{name}</div>
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

  cursor: ${({ select }) => (select ? '' : 'pointer')};
  font-size: 1.1rem;
  &:hover {
    color: #b66dff;
    font-weight: 700;
  }

  color: ${({ select }) => (select ? '#B66DFF' : '')};
  font-weight: ${({ select }) => (select ? '700' : '')};
  position: relative;
  &::before {
    content: '';
    position: absolute;
    right: 0;
    width: 4px;
    height: 100%;
    top: 0;
    bottom: 0;
    background-color: ${({ select }) => (select ? '#b66dff' : '')};
  }
`;

export default ReportSidebarItem;
