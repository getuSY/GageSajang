import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReportModal from '../../atoms/ReportModal';
import StatusReportIndex from '../../molecules/StatusReportIndex';
import StatusReportTitle from '../../molecules/StatusReportTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface StatusReportProps {
  region?: string;
  content: any;
  category: string;
  tab: number;
  icon?: any;
}

const StatusReport = ({
  region,
  content,
  category,
  tab,
  icon,
}: StatusReportProps) => {
  const [title, setTitle] = useState({
    name: content[0].name,
    icon: icon[0],
  });
  useEffect(() => {
    console.log(tab, content[tab - 1].name, icon[tab - 1]);
    setTitle({
      name: content[tab - 1].name,
      icon: icon[tab - 1],
    });
  }, [tab]);
  return (
    <ReportModal>
      <StatusReportIndex
        region={region}
        content={content}
        category={category}
        tab={tab}
        icon={icon}
      ></StatusReportIndex>
      <StatusReportTitle title={title} />
    </ReportModal>
  );
};

const Wrapper = styled.div``;

export default StatusReport;
