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
  children?: React.ReactNode;
}

const ReportTitle = ({ style, icon, children }: ReportTitleProps) => {
  return (
    <Wrapper style={style}>
      <FontAwesomeIcon
        icon={icon ? icon : faCashRegister}
        className="report-title-icon"
      ></FontAwesomeIcon>
      <div>{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #001aa4;
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
