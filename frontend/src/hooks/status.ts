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
  getStatusApt,
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

// 상권 배후지 아파트 API
export const useStatusApt = (guName: string) =>
  useQuery({
    queryKey: ['status', 'apt', guName],
    queryFn: () => getStatusApt(guName),
  });

const timeLabels = [
  '0~6시',
  '6~11시',
  '11~14시',
  '14~17시',
  '17~21시',
  '21~24시',
];
const weekLabels = [
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
  '일요일',
];
const genderLabels = ['남성(명)', '여성(명)'];
const genderPerLabels = ['남성(%)', '여성(%)'];
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
    [0, '#A78DED90'],
    [0.3, '#60AEEE90'],
    [0.6, '#A4D7FC90'],
    [1, '#BBFBF790'],
  ],
];

const timeGrad = [
  [
    [0, '#72C5F860'],
    [1, '#705FE9d9'],
  ],
];

const blueGrad = [
  [
    [0, '#72C5F8'],
    [0.8, '#6975ED'],
    [1, '#705FE9'],
  ],
];

const aptGrad = [
  [
    [0, '#F8DB6D'],
    [1, '#10C1CC'],
  ],
  [
    [0, '#60AEEE'],
    [1, '#8C63E5'],
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
            barThickness: 70,
            data: fpDetail.gender.map((e: number) => Math.floor(e / 90)),
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
        ],
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
            label: '연령대별 유동인구(명)',
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
          [0, '#56B6F7'],
          [0.8, '#6193F2'],
          [1, '#705FE9'],
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
            label: '하루 평균(명)',
            data: fpDetail.quarter.map((e: number) => Math.floor(e / 90)),
            barThickness: 60,
            datalabels: {
              color: 'transparent', // 데이터라벨 숨김
            },
          },
        ],
      },
      grad: blueGrad,
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
            label: '요일별 유동인구(명)',
            data: fpDetail.week.map((e: number) => Math.floor(e / 90)),
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
              // color: 'red',
            },
            borderWidth: 3, // 선 굵기
            borderColor: '#6585EF80', // 선 색
            pointRadius: 4, // 포인터 크기
          },
        ],
      },
      grad: weekGrad,
      options: {
        scale: {
          // 눈금 조정(선 3개만 나오게)
          ticks: {
            maxTicksLimit: 3,
          },
        },
        tooltips: {
          mode: 'dataset',
        },
      },
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
            label: '시간대별 유동인구(명)',
            data: fpDetail.time.map((e: number) => Math.floor(e / 90)),
            borderColor: '#6585EF',
            backgroundColor: '#6585EF',
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
            data: rpDetail.resident.gender,
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
            label: '연령대별 거주인구(명)',
            data: rpDetail.resident.age,
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: blueGrad,
    }),
    [rpDetail]
  );

  // 상권 아파트/비아파트 비율
  const rpAptData = useMemo(
    () => ({
      type: 'pie',
      data: {
        labels: ['아파트', '비아파트'],
        datasets: [
          {
            label: '상권 아파트/비아파트 비율',
            data: [rpDetail.resident.apt, rpDetail.resident.nonApt],
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: aptGrad,
    }),
    [rpDetail]
  );

  //상권 배후지 아파트/비아파트 비율
  const rpApt2Data = useMemo(
    () => ({
      type: 'pie',
      data: {
        labels: ['아파트', '비아파트'],
        datasets: [
          {
            label: '상권배후지 아파트/비아파트 비율',
            data: [rpDetail.apt.apt, rpDetail.apt.nonApt],
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: aptGrad,
    }),
    [rpDetail]
  );

  return { rpGenderData, rpAgeData, rpAptData, rpApt2Data };
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
            label: '업종별 점포 수(개소)',
            data: storeDetail.cs,
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: blueGrad,
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
            label: '상권 구분별 점포 수(개소)',
            data: storeDetail.div,
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: blueGrad,
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
            label: '업종별 개업률(%)',
            data: openDetail.open.cs,
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: blueGrad,
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
            label: '개업률 높은 상권(%)',
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
      grad: blueGrad,
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
            label: '업종별 폐업률(%)',
            data: closeDetail.close.cs,
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: blueGrad,
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
      grad: blueGrad,
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
            label: '월 평균 업종별 매출(만 원)',
            data: salesDetail.cs.map((sales: number) => sales / 10000),
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: blueGrad,
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
            label: '요일별 매출 비율(%)',
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
      // options: {
      //   scales: { ticks: { stepSize: 10, count: 2, maxTicksLimit: 2 } },
      // },
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
            label: '연령대별 매출 비율(%)',
            data: salesDetail.age,
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: blueGrad,
    }),
    [salesDetail]
  );

  // 성별별 매출
  const salesGenderData = useMemo(
    () => ({
      type: 'pie',
      data: {
        labels: genderPerLabels,
        datasets: [
          {
            label: '성별별 매출 비율(%)',
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
            label: '시간대별 매출 비율(%)',
            data: salesDetail.time,
            borderColor: '#6585EF',
            backgroundColor: '#6585EF',
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
