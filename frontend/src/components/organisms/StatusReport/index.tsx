import React, { useEffect, useState } from 'react';
import ReportModal from '../../atoms/ReportModal';
import styled from 'styled-components';
import StatusReportIndex from '../../molecules/StatusReportIndex';
import StatusReportItem from '../../molecules/StatusReportItem';
import { useStatusApt, useStatusDetail } from '../../../hooks/status';

interface StatusReportProps {
  region: string;
  content: any;
  tab: number;
  icon?: any;
  isOpen?: boolean;
  title?: any;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const StatusReport = ({
  region,
  content,
  tab,
  icon,
  isOpen,
  setIsOpen,
}: StatusReportProps) => {
  const [title, setTitle] = useState({
    name: content[0].name,
    icon: icon[0],
  });
  // 현황 상세 페이지 API
  const { data: statusResult, isSuccess } = useStatusDetail(region);

  useEffect(() => {
    setTitle({
      name: content[tab].name,
      icon: icon[tab],
    });
  }, [tab]);

  const { data } = useStatusApt(region!);

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
              tab={tab}
              icon={icon}
            />
            <div className="report-content">
              {tab === 0 && (
                // 유동인구
                <StatusReportItem
                  type="FP"
                  title={title}
                  detail={statusResult.living}
                />
              )}
              {tab === 1 && (
                // 거주인구
                <StatusReportItem
                  type="RP"
                  title={title}
                  detail={{ resident: statusResult.resident, apt: data }}
                />
              )}
              {tab === 2 && (
                // 점포 수
                <StatusReportItem
                  type="stores"
                  title={title}
                  detail={statusResult.store}
                />
              )}
              {tab === 3 && (
                // 개업률
                <StatusReportItem
                  type="open"
                  title={title}
                  detail={{
                    open: statusResult.open,
                    change: statusResult.change,
                  }}
                />
              )}
              {tab === 4 && (
                // 폐업률
                <StatusReportItem
                  type="close"
                  title={title}
                  detail={{
                    close: statusResult.close,
                    change: statusResult.change,
                  }}
                />
              )}
              {tab === 5 && (
                // 매출
                <StatusReportItem
                  type="sales"
                  title={title}
                  detail={statusResult.sales}
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
