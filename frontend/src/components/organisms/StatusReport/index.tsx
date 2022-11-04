import React from 'react';
import styled from 'styled-components';
import ReportModal from '../../atoms/ReportModal';
import StatusReportIndex from '../../molecules/StatusReportIndex';
import StatusReportTitle from '../../molecules/StatusReportTitle';

interface StatusReportProps {
  region?: string;
  content: any;
  category: string;
  tab?: number;
}

const StatusReport = ({
  region,
  content,
  category,
  tab,
}: StatusReportProps) => {
  return (
    <ReportModal>
      <StatusReportIndex
        region={region}
        content={content}
        category={category}
        tab={tab}
      ></StatusReportIndex>
      <StatusReportTitle></StatusReportTitle>
    </ReportModal>
  );
};

const Wrapper = styled.div``;

export default StatusReport;
