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
  onClick?: React.MouseEventHandler<HTMLLabelElement>;
  active: boolean;
}

const ReportIndexItem = ({
  icon,
  style,
  children,
  onClick,
  active,
}: ReportIndexProps) => {
  return (
    <Wrapper style={style} onClick={onClick} active={active}>
      <FontAwesomeIcon
        icon={icon ? icon : faCashRegister}
        className="index-icon"
      ></FontAwesomeIcon>
      {children}
    </Wrapper>
  );
};

interface WrapperProps {
  active: boolean;
}

const Wrapper = styled.label<WrapperProps>`
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  font-family: 'Pretendard-Regular';
  cursor: pointer;
  color: ${({ active }) => (active ? 'white' : 'darkgray')};
  background-color: ${({ active, theme }) => (active ? theme.darkColor : '')};
  border-radius: ${({ active }) => (active ? '5px' : '')};
  & .index-icon {
    margin-right: 10px;
  }
`;

export default ReportIndexItem;
