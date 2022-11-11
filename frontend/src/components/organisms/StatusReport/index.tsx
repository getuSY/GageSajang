import React, { useEffect, useState } from 'react';
import ReportModal from '../../atoms/ReportModal';
import styled from 'styled-components';
import StatusReportIndex from '../../molecules/StatusReportIndex';
import StatusReportFP from '../../molecules/StatusReportFP';
import StatusReportRP from '../../molecules/StatusReportRP';
import StatusReportSales from '../../molecules/StatusReportSales';
import StatusReportOpen from '../../molecules/StatusReportOpen';
import StatusReportClose from '../../molecules/StatusReportClose';
import StatusReportStores from '../../molecules/StatusReportStores';

interface StatusReportProps {
  region?: string;
  content: any;
  category: string;
  tab: number;
  icon?: any;
  isOpen?: boolean;
  title?: any;
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
        '#799ECF',
        '#76A7D5',
        '#74B1D9',
        '#79BADB',
        '#80C4DD',
        '#88CEDF',
        '#93D7E9',
      ],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      font: {
        weight: 'bold',
      },
      color: 'green',
    },
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
    <Wrapper>
      <ReportModal
        // 상세 페이지, 모달 + close 버튼 //
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <StatusReportIndex
          // 상세페이지 상단 버튼들 //
          region={region}
          content={content}
          category={category}
          tab={tab}
          icon={icon}
        />
        {tab === 1 && (
          <StatusReportFP
            title={title}
            region={region}
            category={category!}
            tab={tab}
          />
        )}
        {tab === 2 && (
          <StatusReportRP
            title={title}
            region={region}
            category={category!}
            tab={tab}
          />
        )}
        {tab === 3 && (
          <StatusReportStores
            title={title}
            region={region}
            category={category!}
            tab={tab}
          />
        )}
        {tab === 4 && (
          <StatusReportOpen
            title={title}
            region={region}
            category={category!}
            tab={tab}
          />
        )}
        {tab === 5 && (
          <StatusReportClose
            title={title}
            region={region}
            category={category!}
            tab={tab}
          />
        )}
        {tab === 6 && (
          <StatusReportSales
            title={title}
            region={region}
            category={category!}
            tab={tab}
          />
        )}
      </ReportModal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & .report-top-div {
    display: flex;
    gap: 2rem;
    width: 100%;
    & > div {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  & .status-report-content {
    height: 3000px;
    overflow-y: scroll;
  }
`;

export default StatusReport;
