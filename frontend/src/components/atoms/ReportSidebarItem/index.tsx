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

  cursor: ${({ select }) => (select ? '' : 'pointer')};
  font-size: 1.3rem;
  &:hover {
    /* background: ${({ theme }) => theme.darkColor}; */
    background: rgba(255, 255, 255, 0.3);
  }
  background: ${({ select, theme }) =>
    select ? 'rgba(255, 255, 255, 0.3)' : 'transparent'};
`;

export default ReportSidebarItem;
