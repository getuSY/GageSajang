import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

interface ReportRegionLabelProps {
  children?: React.ReactNode;
  style?: object;
}

const ReportRegionLabel = ({ children, style }: ReportRegionLabelProps) => {
  return (
    <Wrapper style={style}>
      <FontAwesomeIcon
        icon={faLocationDot}
        className="region-icon"
      ></FontAwesomeIcon>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-family: 'Pretendard-Regular';
  font-weight: 700;
  width: 14rem;
  & .region-icon {
    margin-right: 10px;
  }
`;

export default ReportRegionLabel;
