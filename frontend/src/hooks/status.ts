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

// 상권 상세 페이지 API
export const useStatusDetail = (guName: string) =>
  useQuery({
    queryKey: ['status', 'detail', guName],
    queryFn: () => getStatusDetail(guName),
  });

const timeLabels = [
  '0~6시',
  '6~11시',
  '11~14시',
  '14~17시',
  '17~21시',
  '21~24시',
];
const weekLabels = ['월', '화', '수', '목', '금', '토', '일'];
const genderLabels = ['남', '여'];
const ageLabels = ['10대', '20대', '30대', '40대', '50대', '60대'];
const storeCntLabels = [
  '2021년 1분기',
  '2021년 2분기',
  '2021년 3분기',
  '2021년 4분기',
];
const storeCsLabels = ['외식업', '서비스업', '도소매업'];
const sotreAreaLabels = ['골목상권', '전통시장', '관광특구', '발달상권'];
const genderGrad = [
  [
    [0, '#B6ACF1'],
    [1, '#27CFFB'],
  ],
  [
    [0, '#F3B79B'],
    [1, '#F872D4'],
  ],
];

const weekGrad = [
  [
    [0, '#23CFFA'],
    [0.25, '#A9B6F6'],
    [0.5, '#C2A0EB'],
    [0.75, '#D98CE1'],
    [1, '#FC6DD1'],
  ],
];

const timeGrad = [
  [
    [0, '#B29AF860'],
    [1, '#B29AF8d9'],
  ],
];

// 유동인구 상세 페이지
export const useStatusFpData = (fpDetail: any) => {
  // 성별별 유동인구
  const fpGenderData = useMemo(
    () => ({
      type: 'pie',
      data: {
        labels: genderLabels,
        datasets: [
          {
            label: '성별별 유동인구',
            barThickness: 70,
            data: fpDetail.gender.map((e: number) => Math.floor(e / 90)),
            datalabels: {
              // 데이터라벨 숨김
              color: 'white',
            },
          },
        ],
      },
      options: {
        plugins: {
          datalabels: {
            font: {
              weight: 'bold',
            },
            color: 'white',
            padding: 6,
            backgroundColor: '#79797930',
            borderRadius: 4,
          },
        },
      },
      grad: genderGrad,
    }),
    [fpDetail]
  );

  // 연령대별 유동인구 수
  const fpAgeData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: ageLabels,
        datasets: [
          {
            label: '연령대별 유동인구',
            data: fpDetail.age.map((e: number) => Math.floor(e / 90)),
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [0.8, '#714BF4'],
          [1, '#545BF9'],
        ],
      ],
    }),
    [fpDetail]
  );

  // 분기별 유동인구
  const fpQuaterData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: storeCntLabels,
        datasets: [
          {
            label: '분기별 유동인구',
            data: fpDetail.quarter.map((e: number) => Math.floor(e / 90)),
            barThickness: 60,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [0.8, '#714BF4'],
          [1, '#545BF9'],
        ],
      ],
    }),
    [fpDetail]
  );

  // 요일별 유동인구
  const fpWeekData = useMemo(
    () => ({
      type: 'radar',
      data: {
        labels: weekLabels,
        datasets: [
          {
            label: '요일별 유동인구',
            data: fpDetail.week.map((e: number) => Math.floor(e / 90)),
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: weekGrad,
    }),
    [fpDetail]
  );

  // 시간대별 유동인구
  const fpTimeData = useMemo(
    () => ({
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [
          {
            label: '시간대별 매출',
            data: fpDetail.time.map((e: number) => Math.floor(e / 90)),
            borderColor: '#B29AF8',
            backgroundColor: '#B29AF8',
            borderWidth: 2,
            fill: true,
            datalabels: {
              color: 'transparent',
            },
            tension: 0.5,
          },
        ],
      },
      grad: timeGrad,
    }),
    [fpDetail]
  );

  return { fpGenderData, fpAgeData, fpQuaterData, fpWeekData, fpTimeData };
};

// 거주인구 상세 페이지
export const useStatusRpData = (rpDetail: any) => {
  // 성별별 거주인구
  const rpGenderData = useMemo(
    () => ({
      type: 'pie',
      data: {
        labels: genderLabels,
        datasets: [
          {
            label: '성별별 거주인구',
            barThickness: 70,
            data: rpDetail.gender,
            datalabels: {
              // 데이터라벨 숨김
              color: 'white',
            },
          },
        ],
      },
      options: {
        plugins: {
          datalabels: {
            font: {
              weight: 'bold',
            },
            color: 'white',
            padding: 6,
            backgroundColor: '#79797930',
            borderRadius: 4,
          },
        },
      },
      grad: genderGrad,
    }),
    [rpDetail]
  );

  // 연령대별 거주인구
  const rpAgeData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: ageLabels,
        datasets: [
          {
            label: '연령대별 거주인구',
            data: rpDetail.age,
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [0.8, '#714BF4'],
          [1, '#545BF9'],
        ],
      ],
    }),
    [rpDetail]
  );

  // 아파트/비아파트 비율
  const rpAptData = useMemo(
    () => ({
      type: 'pie',
      data: {
        labels: ['아파트', '비아파트'],
        datasets: [
          {
            label: '아파트/비아파트 비율',
            data: [rpDetail.apt, rpDetail.nonApt],
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [0.8, '#714BF4'],
          [1, '#545BF9'],
        ],
      ],
    }),
    [rpDetail]
  );

  return { rpGenderData, rpAgeData, rpAptData };
};

// 점포 수 상세 페이지
export const useStatusStoreData = (storeDetail: any) => {
  // 업종별 점포 수
  const storeCsData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: storeCsLabels,
        datasets: [
          {
            label: '업종별 점포 수',
            data: storeDetail.cs,
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [0.8, '#714BF4'],
          [1, '#545BF9'],
        ],
      ],
    }),
    [storeDetail]
  );

  // 상권 구분 별 점포 수
  const storeDivData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: sotreAreaLabels,
        datasets: [
          {
            label: '상권 구분별 점포 수',
            data: storeDetail.div,
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [0.8, '#714BF4'],
          [1, '#545BF9'],
        ],
      ],
    }),
    [storeDetail]
  );
  return { storeCsData, storeDivData };
};

// 개업률 상세 페이지
export const useStatusOpenData = (openDetail: any) => {
  // 업종별 개업률
  const openCsData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: storeCsLabels,
        datasets: [
          {
            label: '업종별 개업률',
            data: openDetail.open.cs,
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [0.8, '#714BF4'],
          [1, '#545BF9'],
        ],
      ],
    }),
    [openDetail]
  );

  // 개업률 높은 상권 Top3
  const openTopData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: [
          openDetail.open.top3[0].name,
          openDetail.open.top3[1].name,
          openDetail.open.top3[2].name,
        ],
        datasets: [
          {
            label: '개업률 높은 상권 Top3',
            data: [
              openDetail.open.top3[0].per,
              openDetail.open.top3[1].per,
              openDetail.open.top3[2].per,
            ],
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [0.8, '#714BF4'],
          [1, '#545BF9'],
        ],
      ],
    }),
    [openDetail]
  );

  const openChangeData = useMemo(() => openDetail.change, [openDetail]);

  return { openCsData, openTopData, openChangeData };
};

// 폐업률 상세 페이지
export const useStatusCloseData = (closeDetail: any) => {
  // 업종별 폐업률
  const closeCsData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: storeCsLabels,
        datasets: [
          {
            label: '업종별 폐업률',
            data: closeDetail.close.cs,
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [0.8, '#714BF4'],
          [1, '#545BF9'],
        ],
      ],
    }),
    [closeDetail]
  );

  // 폐업률 높은 상권 Top3
  const closeTopData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: [
          closeDetail.close.top3[0].name,
          closeDetail.close.top3[1].name,
          closeDetail.close.top3[2].name,
        ],
        datasets: [
          {
            label: '폐업률 높은 상권 Top3',
            data: [
              closeDetail.close.top3[0].per,
              closeDetail.close.top3[1].per,
              closeDetail.close.top3[2].per,
            ],
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [0.8, '#714BF4'],
          [1, '#545BF9'],
        ],
      ],
    }),
    [closeDetail]
  );

  const closeChangeData = useMemo(() => closeDetail.change, [closeDetail]);

  return { closeCsData, closeTopData, closeChangeData };
};

// 매출 상세 페이지
export const useStatusSalesData = (salesDetail: any) => {
  // 업종별 매출
  const salesCsData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: storeCsLabels,
        datasets: [
          {
            label: '업종별 매출',
            data: salesDetail.cs,
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [0.8, '#714BF4'],
          [1, '#545BF9'],
        ],
      ],
    }),
    [salesDetail]
  );

  // 요일별 매출
  const salesWeekData = useMemo(
    () => ({
      type: 'radar',
      data: {
        labels: weekLabels,
        datasets: [
          {
            label: '요일별 매출',
            data: salesDetail.week,
            min: 0,
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: weekGrad,
      options: {
        scales: { ticks: { stepSize: 10, count: 2, maxTicksLimit: 2 } },
      },
    }),
    [salesDetail]
  );

  // 연령대별 매출
  const salesAgeData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: ageLabels,
        datasets: [
          {
            label: '연령대별 매출',
            data: salesDetail.age,
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [0.8, '#714BF4'],
          [1, '#545BF9'],
        ],
      ],
    }),
    [salesDetail]
  );

  // 성별별 매출
  const salesGenderData = useMemo(
    () => ({
      type: 'pie',
      data: {
        labels: genderLabels,
        datasets: [
          {
            label: '성별별 매출',
            barThickness: 70,
            data: salesDetail.gender,
            datalabels: {
              // 데이터라벨 숨김
              color: 'white',
            },
          },
        ],
      },
      options: {
        plugins: {
          datalabels: {
            font: {
              weight: 'bold',
            },
            color: 'white',
            padding: 6,
            backgroundColor: '#79797930',
            borderRadius: 4,
          },
        },
      },
      grad: genderGrad,
    }),
    [salesDetail]
  );

  // 시간대별 매출
  const salesTimeData = useMemo(
    () => ({
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [
          {
            label: '시간대별 매출',
            data: salesDetail.time,
            borderColor: '#B29AF8',
            backgroundColor: '#B29AF8',
            borderWidth: 2,
            fill: true,
            datalabels: {
              color: 'transparent',
            },
            tension: 0.5,
          },
        ],
      },
      grad: timeGrad,
    }),
    [salesDetail]
  );

  return {
    salesCsData,
    salesWeekData,
    salesAgeData,
    salesGenderData,
    salesTimeData,
  };
};
