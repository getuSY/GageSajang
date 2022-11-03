import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCashRegister,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

interface ReportIndexProps {
  style?: object;
  icon?: IconDefinition;
  children?: React.ReactNode;
}

const ReportIndexItem = ({ icon, style, children }: ReportIndexProps) => {
  return (
    <Wrapper style={style}>
      <FontAwesomeIcon
        icon={icon ? icon : faCashRegister}
        className="index-icon"
      ></FontAwesomeIcon>
      유동인구
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  font-family: 'Pretendard-Regular';
  & .index-icon {
    margin-right: 10px;
  }
`;

export default ReportIndexItem;
