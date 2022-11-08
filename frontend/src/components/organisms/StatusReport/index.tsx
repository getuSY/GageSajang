import { faBlackTie } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReportModal from '../../atoms/ReportModal';
import StatusReportBarChart from '../../molecules/StatusReportBarChart';
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

const data = {
  labels: [
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
    '일요일',
  ],
  hoverOffset: 4,
  datasets: [
    {
      data: [12, 2, 9, 5, 10, 8, 5],

      backgroundColor: [
        '#92D7E0',
        '#88CEDF',
        '#80C4DD',
        '#79BADB',
        '#74B1D9',
        '#72A7D5',
        '#719ECF',
      ],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  tooltips: {
    enabled: true,
  },
};

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
      <StatusReportBarChart
        title={'분기별 요일 평균'}
        data={data}
        options={options}
        style={{ margin: '3rem 0rem 0rem 1rem' }}
      ></StatusReportBarChart>
    </ReportModal>
  );
};

const Wrapper = styled.div``;

export default StatusReport;
