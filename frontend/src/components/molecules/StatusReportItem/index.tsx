import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import React from 'react';
import StatusReportClose from './StatusReportClose';
import StatusReportFP from './StatusReportFP';
import StatusReportOpen from './StatusReportOpen';
import StatusReportRP from './StatusReportRP';
import StatusReportSales from './StatusReportSales';
import StatusReportStores from './StatusReportStores';

interface StatusReportItemProps {
  type: 'FP' | 'RP' | 'stores' | 'open' | 'close' | 'sales';
  title?: { name: string; icon: IconDefinition };
  detail?: any;
}

const StatusReportItem = ({ type, title, detail }: StatusReportItemProps) => {
  return (
    <>
      {type === 'FP' && <StatusReportFP title={title} fpDetail={detail} />}
      {type === 'RP' && <StatusReportRP title={title} rpDetail={detail} />}
      {type === 'stores' && (
        <StatusReportStores title={title} storesDetail={detail} />
      )}
      {type === 'open' && (
        <StatusReportOpen title={title} openDetail={detail} />
      )}
      {type === 'close' && (
        <StatusReportClose title={title} closeDetail={detail} />
      )}
      {type === 'sales' && (
        <StatusReportSales title={title} salesDetail={detail} />
      )}
    </>
  );
};

export default StatusReportItem;
