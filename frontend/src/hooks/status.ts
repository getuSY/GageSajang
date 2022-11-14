import { useMemo } from 'react';
import { useQueries } from '@tanstack/react-query';
import {
  getStatusGuFPMap,
  getStatusGuRPMap,
  getStatusGuStoresMap,
  getStatusGuOpeningMap,
  getStatusGuClosureMap,
  getStatusGuSalesMap,
  getStatusHinGuFPMap,
  getStatusHinGuRPMap,
  getStatusHinGuStoresMap,
  getStatusHinGuOpeningMap,
  getStatusHinGuClosureMap,
  getStatusHinGuSalesMap,
} from '../api/status';

// 상권 Map API
export const useStatusGuMap = () => {
  const guData = useQueries({
    queries: [
      {
        queryKey: ['status', 'gu', 'floating'],
        queryFn: () => getStatusGuFPMap(),
      },
      {
        queryKey: ['status', 'gu', 'resident'],
        queryFn: () => getStatusGuRPMap(),
      },
      {
        queryKey: ['status', 'gu', 'store'],
        queryFn: () => getStatusGuStoresMap(),
      },
      {
        queryKey: ['status', 'gu', 'open'],
        queryFn: () => getStatusGuOpeningMap(),
      },
      {
        queryKey: ['status', 'gu', 'close'],
        queryFn: () => getStatusGuClosureMap(),
      },
      {
        queryKey: ['status', 'gu', 'sales'],
        queryFn: () => getStatusGuSalesMap(),
      },
    ],
  });
  const isGuSuccess = useMemo(() => guData.every((e) => e.isSuccess), [guData]);
  const isGuLoading = useMemo(() => guData.some((e) => e.isLoading), [guData]);
  const isGuError = useMemo(() => guData.some((e) => e.isError), [guData]);

  return { guData, isGuSuccess, isGuLoading, isGuError };
};

// 상권 배후지 Map API
export const useStatusHinGuMap = () => {
  const hinGuData = useQueries({
    queries: [
      {
        queryKey: ['status', 'hingu', 'floating'],
        queryFn: () => getStatusHinGuFPMap(),
      },
      {
        queryKey: ['status', 'hingu', 'resident'],
        queryFn: () => getStatusHinGuRPMap(),
      },
      {
        queryKey: ['status', 'hingu', 'store'],
        queryFn: () => getStatusHinGuStoresMap(),
      },
      {
        queryKey: ['status', 'hingu', 'open'],
        queryFn: () => getStatusHinGuOpeningMap(),
      },
      {
        queryKey: ['status', 'hingu', 'close'],
        queryFn: () => getStatusHinGuClosureMap(),
      },
      {
        queryKey: ['status', 'hingu', 'sales'],
        queryFn: () => getStatusHinGuSalesMap(),
      },
    ],
  });
  const isHinGuSuccess = useMemo(
    () => hinGuData.every((e) => e.isSuccess),
    [hinGuData]
  );
  const isHinGuLoading = useMemo(
    () => hinGuData.some((e) => e.isLoading),
    [hinGuData]
  );
  const isHinGuError = useMemo(
    () => hinGuData.some((e) => e.isError),
    [hinGuData]
  );

  return { hinGuData, isHinGuSuccess, isHinGuLoading, isHinGuError };
};
