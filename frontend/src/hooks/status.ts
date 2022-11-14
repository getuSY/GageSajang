import { useMemo } from 'react';
import { useQueries } from '@tanstack/react-query';
import {
  getStatusFPMap,
  getStatusRPMap,
  getStatusStoresMap,
  getStatusOpeningMap,
  getStatusClosureMap,
  getStatusSalesMap,
} from '../api/status';

export const useStatusMap = () => {
  const data = useQueries({
    queries: [
      {
        queryKey: ['status', 'floating'],
        queryFn: () => getStatusFPMap(),
      },
      {
        queryKey: ['status', 'resident'],
        queryFn: () => getStatusRPMap(),
      },
      {
        queryKey: ['status', 'store'],
        queryFn: () => getStatusStoresMap(),
      },
      {
        queryKey: ['status', 'open'],
        queryFn: () => getStatusOpeningMap(),
      },
      {
        queryKey: ['status', 'close'],
        queryFn: () => getStatusClosureMap(),
      },
      {
        queryKey: ['status', 'sales'],
        queryFn: () => getStatusSalesMap(),
      },
    ],
  });
  const isSuccess = useMemo(() => data.every((e) => e.isSuccess), [data]);
  const isLoading = useMemo(() => data.some((e) => e.isLoading), [data]);
  const isError = useMemo(() => data.some((e) => e.isError), [data]);

  return { data, isSuccess, isLoading, isError };
};

// export const useStatusMapData = () => {
//   const allData = useMemo(() => ({

//   }), []);
// };
