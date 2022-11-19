import React from 'react';
import styled from 'styled-components';
import ReportIndexItem from '../../atoms/ReportIndexItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

interface StatusReportIndexProps {
  region?: string;
  content: any;
  tab?: number;
  icon?: any;
}

const StatusReportIndex = ({
  region,
  content,
  tab,
  icon,
}: StatusReportIndexProps) => {
  return (
    <Wrapper>
      <ReportRegionLabel>
        <FontAwesomeIcon icon={faLocationDot} className="region-icon" />
        <div className="region-label-div">
          <span className="region-label">{region}</span>
          <span className="label-category">현황</span>
        </div>
      </ReportRegionLabel>
      <div className="label-div">
        {content.map((e: any, i: number) => {
          return (
            <ReportIndexItem
              key={`status-report-index-item-${i}`}
              onClick={e.onClick}
              active={tab === i}
              style={{ padding: '10px', marginRight: '0.5rem' }}
              icon={icon[i]}
            >
              {e.name}
            </ReportIndexItem>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #ffffff;
  display: flex;
  padding: 15px 5rem 15px 1.5rem;
  width: 90%;
  height: 30px;
  border-bottom: 1px solid darkgray;
  align-items: center;
  justify-content: space-between;

  & .region-label-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    & .region-label {
      color: ${({ theme }) => theme.mainColor};
      font-weight: 700;
      text-justify: center;
      width: 5rem;
      text-align: center;
    }

    & .label-category {
      width: 7rem;
    }
  }
`;

const ReportRegionLabel = styled.label`
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

export default StatusReportIndex;
