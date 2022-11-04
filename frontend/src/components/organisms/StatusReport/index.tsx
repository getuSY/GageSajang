import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReportModal from '../../atoms/ReportModal';
import StatusReportIndex from '../../molecules/StatusReportIndex';
import StatusReportTitle from '../../molecules/StatusReportTitle';

interface StatusReportProps {
  region?: string;
  content: any;
  category: string;
  tab: number;
  icon?: any;
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const StatusReport = ({
  region,
  content,
  category,
  tab,
  icon,
  isOpen,
  setIsOpen,
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
    <ReportModal
      // 상세 페이지, 모달 + close 버튼
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <StatusReportIndex
        // 상세페이지 상단 버튼들
        region={region}
        content={content}
        category={category}
        tab={tab}
        icon={icon}
      ></StatusReportIndex>
      <StatusReportTitle
        // 상세 페이지 내용
        title={title}
      />
    </ReportModal>
  );
};

const Wrapper = styled.div``;

export default StatusReport;
