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
import { useStatusApt } from '../../../hooks/status';

interface StatusReportProps {
  region?: string;
  content: any;
  // category: string;
  tab: number;
  icon?: any;
  isOpen?: boolean;
  title?: any;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  statusResult: any;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

const StatusReport = ({
  region,
  content,
  tab,
  icon,
  isOpen,
  setIsOpen,
  statusResult,
  isLoading,
  isSuccess,
  isError,
}: StatusReportProps) => {
  const [title, setTitle] = useState({
    name: content[0].name,
    icon: icon[0],
  });
  useEffect(() => {
    setTitle({
      name: content[tab].name,
      icon: icon[tab],
    });
  }, [tab]);

  const {
    data,
    isSuccess: isAptSuccess,
    isLoading: isAptLoading,
    isError: isAptError,
  } = useStatusApt(region!);

  console.log(data);

  return (
    <Wrapper>
      <ReportModal
        // 상세 페이지, 모달 + close 버튼 //
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        {isSuccess && (
          <>
            <StatusReportIndex
              // 상세페이지 상단 버튼들 //
              region={region}
              content={content}
              // category={category}
              tab={tab}
              icon={icon}
            />
            <div className="report-content">
              {tab === 0 && (
                // 유동인구
                <StatusReportFP
                  title={title}
                  fpDetail={statusResult.living}
                  region={region}
                />
              )}
              {tab === 1 && (
                // 거주인구
                <StatusReportRP
                  title={title}
                  rpDetail={{ resident: statusResult.resident, apt: data }}
                  region={region}
                />
              )}
              {tab === 2 && (
                // 점포 수
                <StatusReportStores
                  title={title}
                  storesDetail={statusResult.store}
                  region={region}
                />
              )}
              {tab === 3 && (
                // 개업률
                <StatusReportOpen
                  title={title}
                  openDetail={{
                    open: statusResult.open,
                    change: statusResult.change,
                  }}
                  region={region}
                />
              )}
              {tab === 4 && (
                // 폐업률
                <StatusReportClose
                  title={title}
                  closeDetail={{
                    close: statusResult.close,
                    change: statusResult.change,
                  }}
                  region={region}
                />
              )}
              {tab === 5 && (
                // 매출
                <StatusReportSales
                  title={title}
                  salesDetail={statusResult.sales}
                  region={region}
                />
              )}
            </div>
          </>
        )}
      </ReportModal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & .report-content {
    overflow-y: scroll;
    padding: 1rem;
  }
`;

export default StatusReport;
