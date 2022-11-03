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
  font-size: 1.5rem;
  font-family: 'Pretendard-Regular';
  font-weight: 700;
  width: 130px;
  & .region-icon {
    margin-right: 10px;
  }
`;

export default ReportRegionLabel;
