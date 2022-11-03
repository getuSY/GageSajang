import React from 'react';
import styled from 'styled-components';
import ReportIndexItem from '../../atoms/ReportIndexItem';
import ReportRegionLabel from '../../atoms/ReportRegionLabel';

interface StatusReportIndexProps {
  region?: string;
  content: any;
  category: string;
  onClickLabelHandler: any;
  tab?: number;
}

const statusList = [
  { name: 'main', content: '상권' },
  { name: 'sub', content: '상권 배후지' },
];

const StatusReportIndex = ({
  region,
  content,
  category,
  onClickLabelHandler,
  tab,
}: StatusReportIndexProps) => {
  return (
    <Wrapper>
      <ReportRegionLabel style={{}}>{region}</ReportRegionLabel>
      <div className="label-div">
        {statusList.map((e, i) => (
          <ReportIndexItem
            style={{ width: '50%' }}
            onClick={() => onClickLabelHandler(e.name)}
            active={e.name === category}
          >
            {e.content}
          </ReportIndexItem>
        ))}
      </div>
      <ReportIndexItem indexList={content}></ReportIndexItem>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  /* padding-left: 1.5rem;
  padding-top: 15px;
  padding-bottom: 15px; */
  padding: 15px 5rem 15px 1.5rem;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid darkgray;
  align-items: center;
  justify-content: space-between;
`;

export default StatusReportIndex;
