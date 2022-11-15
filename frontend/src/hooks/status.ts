import { useMemo } from 'react';
import { useQuery, useQueries } from '@tanstack/react-query';
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
  getStatusTrend,
  getStatusDetail,
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

// 상권 현황 Top10 API
export const useStatusTrend = () =>
  useQuery({
    queryKey: ['status', 'trend'],
    queryFn: () => getStatusTrend(),
  });

// 상권 현황 상세 API
const statusDummy = {
  living: {
    // 유동인구
    total: 82466650, // 총 유동인구
    gender: [
      // 성별
      40722847, // 남자
      41743801, // 여저
    ],
    age: [
      // 연령대
      9942849, // 10대
      15346054, // 20대
      19141428, // 30대
      16183663, // 40대
      10315057, // 50대
      11537602, // 60대 이상
    ],
    quarter: [
      // 분기별 인구
      83006719, // 1분기
      84317047, // 2분기
      79845390, // 3분기
      82535076, // 4분기
    ],
    week: [
      // 요일별 인구
      15133523, // 월요일
      16919363, // 화요일
      13351515, // 수요일
      13548658, // 목요일
      15168429, // 금요일
      8345155, // 토요일
      12274157, // 일요일
    ],
    time: [
      // 시간대별 인구
      12710637, // 시간대1
      12624876, // 시간대2
      12740019, // 시간대3
      12477434, // 시간대4
      10281662, // 시간대5
      9357875, // 시간대6
    ],
  },
  resident: {
    // 거주인구
    total: 188582, // 총 거주인구
    gender: [
      // 성별
      89500, // 남자
      99082, // 여자
    ],
    age: [
      // 연령대
      21214, // 10대
      33790, // 20대
      41095, // 30대
      32972, // 40대
      25571, // 50대
      33940, // 60대 이상
    ],
    house: 108009, // 총 가구수
    apt: 0, // 아파트 수
    nonApt: 108009, // 비아파트 수
  },
  store: {
    // 점포수
    total: 44596, // 총 점포수
    cs: [
      10045, // CS1(외식업) 점포수
      17583, // CS2(서비스업) 점포수
      16967, // CS3(도소매업) 점포수
    ],
    div: [
      // 상권구분
      5382, // 골목상권
      1258, // 전통시장
      836, // 관광특구
      37118, // 발달상권
    ],
    cs1Top3: [
      // 외식업 점포수 많은 top 3
      '한식음식점',
      '커피-음료',
      '분식전문점',
    ],
    cs2Top3: [
      // 서비스업 점포수 많은 top 3
      '부동산중개업',
      '일반의원',
      '미용실',
    ],
    cs3Top3: [
      // 도소매업 점포수 많은 top 3
      '일반의류',
      '화장품',
      '전자상거래업',
    ],
  },
  open: {
    // 개업율
    total: 10, // 총 개업율
    cs: [
      // 업종별
      18, // 외식업 개업율
      8, // 서비스업 개업율
      7, // 도소매업 개업율
    ],
    top3: [
      // 개업율이 높은 top3 상권
      {
        name: '아래방죽마을공원(율현초등학교)', // 상권명
        per: 29, // 개업율
      },
      {
        name: '논현목련공원',
        per: 24,
      },
      {
        name: '윗방죽마을공원',
        per: 24,
      },
    ],
  },
  close: {
    // 폐업율
    total: 9, // 총 폐업율
    cs: [
      // 업종별
      16, // 외식업 폐업율
      6, // 서비스업 폐업율
      7, // 도소매업 폐업율
    ],
    top3: [
      // 폐업율이 높은 top3 상권
      {
        name: '국기원', // 상권명
        per: 20, // 폐업율
      },
      {
        name: '윗방죽마을공원',
        per: 17,
      },
      {
        name: '논현2동주민센터',
        per: 17,
      },
    ],
  },
  change: '다이나믹', // 상권변화지표
  sales: {
    // 매출 (월매출)
    cs: [
      // 업종별 매출
      469998982, // 외식업 매출
      306129194, // 서비스업 매출
      576554359, // 도소매업 매출
    ],
    week: [
      // 요일별 매출 비율
      15, // 월
      16, // 화
      16, // 수
      16, // 목
      17, // 금
      14, // 토
      7, // 일
    ],
    age: [
      // 연령대 매출 비율
      1, // 10대
      8, // 20대
      26, // 30대
      26, // 40대
      30, // 50대
      8, // 60대 이상
    ],
    gender: [
      // 성별 매출 비율
      52, // 남자
      48, // 여자
    ],
    time: [
      // 시간대별 매출 비율
      1, // 00~06시
      15, // 06~11시
      24, // 11~14시
      26, // 14~17시
      21, // 17~21시
      16, // 21~24시
    ],
  },
};

export const useStatusDetail = (params: string) => {
  return statusDummy;
  useQuery({
    queryKey: ['status', 'detail', params],
    queryFn: () => getStatusDetail(params),
  });
};
