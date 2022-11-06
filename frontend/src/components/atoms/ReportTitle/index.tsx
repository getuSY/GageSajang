import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCashRegister,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

interface ReportTitleProps {
  style?: object;
  icon?: IconDefinition;
  title: any;
}

const ReportTitle = ({ style, icon, title }: ReportTitleProps) => {
  console.log(title);
  return (
    <Wrapper style={style}>
      <FontAwesomeIcon
        icon={title.icon}
        className="report-title-icon"
      ></FontAwesomeIcon>
      <div>{title.name}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.darkColor};
  font-family: 'Pretendard-Regular';
  font-size: 1.2rem;
  color: white;
  width: 9rem;
  height: 2rem;
  padding: 10px;
  letter-spacing: 1px;
  border-radius: 5px;

  & .report-title-icon {
    margin-right: 10px;
  }
`;

export default ReportTitle;
