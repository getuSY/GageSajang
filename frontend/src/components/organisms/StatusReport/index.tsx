import React from 'react';
import styled from 'styled-components';
import ReportModal from '../../atoms/ReportModal';
import StatusReportIndex from '../../molecules/StatusReportIndex';

interface StatusReportProps {
  region?: string;
}

const StatusReport = ({ region }: StatusReportProps) => {
  return (
    <ReportModal>
      <StatusReportIndex region={region}></StatusReportIndex>
    </ReportModal>
  );
};

const Wrapper = styled.div``;

export default StatusReport;
