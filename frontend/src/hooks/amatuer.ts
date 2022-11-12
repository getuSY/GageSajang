import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAmatuerResult } from '../api/amatuer';
import { AmatuerResultParams } from '../models/amatuer';

export const useAmatuerResult = (params: AmatuerResultParams) =>
  useQuery({
    queryKey: ['amatuer', 'result'],
    queryFn: () => getAmatuerResult(params),
  });

// 이미사장 데이터

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
const yearLabels = [2017, 2018, 2019, 2020, 2021];

/* 업종 분석 */
export const useStoreData = (amatuerResult: any) => {
  // 해당 동 점포 수 (2021.4분기, 2020.4분기)
  const storeCntData = useMemo(
    () => ({
      data: {
        labels: ['2020년', '2021년'],
        datasets: [
          {
            label: '해당 업종 점포 수',
            data: [amatuerResult.store.yearAgo, amatuerResult.store.total],
            barThickness: 70,
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
          [1, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  // 해당 동 업종별 고객 성비(2021.4분기)
  const storeGenderData = useMemo(
    () => ({
      data: {
        labels: genderLabels,
        datasets: [
          {
            label: '매출',
            barThickness: 70,
            data: amatuerResult.store.gender,
            datalabels: {
              // 데이터라벨 숨김
              color: 'white',
            },
          },
        ],
      },
      grad: [[[0, '#78BFE9']], [[0, '#ED7996']]],
    }),
    [amatuerResult]
  );

  // 해당동 업종 대분류별 고객 연령대 비율(2021.4분기)
  const storeAgeData = useMemo(
    () => ({
      data: {
        labels: ageLabels,
        datasets: [
          {
            label: '유동 인구',
            data: amatuerResult.store.age,
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
    [amatuerResult]
  );

  return { storeCntData, storeGenderData, storeAgeData };
};

/* 매출 분석 - 2021년 연평균 (단위 : 분기) */
export const useSalesData = (amatuerResult: any) => {
  // 5년 총 매출 추이
  const salesTotalData = useMemo(
    () => ({
      data: {
        labels: yearLabels,
        datasets: [
          {
            label: '총 매출(단위: 원)',
            data: amatuerResult.sales.total,
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
          [0.8, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  // 매출 Top3 상권
  const salesAreaTop3Data = useMemo(
    () => amatuerResult.sales.total,
    [amatuerResult]
  );

  // 일별 매출
  const salesWeekData = useMemo(
    () => ({
      data: {
        labels: weekLabels,
        datasets: [
          {
            label: '요일별 매출',
            data: amatuerResult.sales.week,
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
          [0.8, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  // 시간대별 매출
  const salesTimeData = useMemo(
    () => ({
      data: {
        labels: timeLabels,
        datasets: [
          {
            label: '시간대별 매출',
            data: amatuerResult.sales.time,
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
          [0.8, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  // 연령별 매출
  const salesAgeData = useMemo(
    () => ({
      data: {
        labels: ageLabels,
        datasets: [
          {
            label: '연령대별 매출',
            data: amatuerResult.sales.age,
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
          [0.8, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  // 성별 매출
  const salesGenderData = useMemo(
    () => ({
      data: {
        labels: genderLabels,
        datasets: [
          {
            label: '매출',
            barThickness: 70,
            data: amatuerResult.sales.gender,
            datalabels: {
              // 데이터라벨 숨김
              color: 'white',
            },
          },
        ],
      },
      grad: [
        [
          [0.5, '#A82BEC'],
          [1, '#545BF9'],
        ],
        [
          [0.5, '#2bec4b'],
          [1, '#54a1f9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  return {
    salesTotalData,
    salesAreaTop3Data,
    salesWeekData,
    salesTimeData,
    salesAgeData,
    salesGenderData,
  };
};

/* 유동 인구 */
export const useLivingData = (amatuerResult: any) => {
  // 동 기준 5년 총 유동인구 추이
  const livingTotalData = useMemo(
    () => ({
      data: {
        labels: yearLabels,
        datasets: [
          {
            label: '해당 업종 동 매출',
            data: amatuerResult.living.total,
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
          [0.8, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  // 동 기준 유동인구 top3 상권
  const livingAreaTop3Data = useMemo(
    () => amatuerResult.living.areaTop3,
    [amatuerResult]
  );

  // 동 기준 일별 유동인구
  const livingWeekData = useMemo(
    () => ({
      data: {
        labels: weekLabels,
        datasets: [
          {
            label: '요일별 매출',
            data: amatuerResult.living.week,
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
          [0.8, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  // 동 기준 시간대별 유동인구
  const livingTimeData = useMemo(
    () => ({
      data: {
        labels: timeLabels,
        datasets: [
          {
            label: '시간대별 매출',
            data: amatuerResult.living.time,
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
          [0.8, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  // 동 기준 연령대별 유동인구
  const livingAgeData = useMemo(
    () => ({
      data: {
        labels: ageLabels,
        datasets: [
          {
            label: '연령대별 매출',
            data: amatuerResult.living.age,
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
          [0.8, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  // 동 기준 성별 유동인구
  const livingGenderData = useMemo(
    () => ({
      data: {
        labels: genderLabels,
        datasets: [
          {
            label: '매출',
            barThickness: 70,
            data: amatuerResult.living.gender,
            datalabels: {
              // 데이터라벨 숨김
              color: 'white',
            },
          },
        ],
      },
      grad: [
        [
          [0.5, '#A82BEC'],
          [1, '#545BF9'],
        ],
        [
          [0.5, '#2bec4b'],
          [1, '#54a1f9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  return {
    livingTotalData,
    livingAreaTop3Data,
    livingWeekData,
    livingTimeData,
    livingAgeData,
    livingGenderData,
  };
};

/* 점포 수 */
export const useStoreCntData = (amatuerResult: any) => {
  const storeCntOpenData = useMemo(
    () => ({
      data: {
        labels: ['1', '2'],
        datasets: [
          {
            label: 'storeOpenData',
            barThickness: 70,
            data: amatuerResult.open.open,
            datalabels: {
              // 데이터라벨 숨김
              color: 'white',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [1, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  const storeCntCloseData = useMemo(
    () => ({
      data: {
        labels: ['1', '2'],
        datasets: [
          {
            label: 'storeOpenData',
            barThickness: 70,
            data: amatuerResult.close.close,
            datalabels: {
              // 데이터라벨 숨김
              color: 'white',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [1, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  return { storeCntOpenData, storeCntCloseData };
};

/* 상권 배후지 */
export const useHinterlandData = (amatuerResult: any) => {
  const hinterlandPeopleData = useMemo(
    () => ({
      data: {
        labels: ['유동 인구', '직장 인구', '거주 인구'],
        datasets: [
          {
            label: '상권 배후지 인구',
            data: [
              amatuerResult.hinterland.living,
              amatuerResult.hinterland.work,
              amatuerResult.hinterland.resident,
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
          [0.8, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  const hinterlandAgeData = useMemo(
    () => ({
      data: {
        labels: ageLabels,
        datasets: [
          {
            label: '연령대별 매출',
            data: amatuerResult.hinterland.age,
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
          [0.8, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  const hinterlandGenderData = useMemo(
    () => ({
      data: {
        labels: genderLabels,
        datasets: [
          {
            label: '매출',
            barThickness: 70,
            data: amatuerResult.hinterland.gender,
            datalabels: {
              // 데이터라벨 숨김
              color: 'white',
            },
          },
        ],
      },
      grad: [
        [
          [0.5, '#A82BEC'],
          [1, '#545BF9'],
        ],
        [
          [0.5, '#2bec4b'],
          [1, '#54a1f9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  return { hinterlandPeopleData, hinterlandAgeData, hinterlandGenderData };
};
