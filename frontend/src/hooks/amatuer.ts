import { useMemo } from 'react';
import { useQuery, useQueryClient, useQueries } from '@tanstack/react-query';
import {
  getAmatuerResult,
  amatuerSales,
  amatuerLife,
  amatuerResident,
  amatuerJob,
  amatuerCount,
} from '../api/amatuer';
import {
  AmatuerResultParams,
  AmatuerSimulationParams,
} from '../models/amatuer';

export const useAmatuerResult = (params: AmatuerResultParams) =>
  useQuery({
    queryKey: ['amatuer', 'result', params.admCd, params.jobCode],
    queryFn: () => getAmatuerResult(params),
  });

export const usePrefetchAmatuerResult = async (params: AmatuerResultParams) => {
  const queryClient = useQueryClient();
  const data = await queryClient.prefetchQuery({
    queryKey: ['amatuer', 'result', params.admCd, params.jobCode],
    queryFn: () => getAmatuerResult(params),
  });

  return data;
};

export const useAmatuerSimulation = (params: AmatuerSimulationParams) => {
  const { dongName, industryName } = params;
  const response = useQueries({
    queries: [
      {
        queryKey: ['amatuer', 'sales', dongName, industryName],
        queryFn: () => amatuerSales(params),
      },
      {
        queryKey: ['amatuer', 'life', dongName, industryName],
        queryFn: () => amatuerLife(params),
      },
      {
        queryKey: ['amatuer', 'resident', dongName, industryName],
        queryFn: () => amatuerResident(params),
      },
      {
        queryKey: ['amatuer', 'job', dongName, industryName],
        queryFn: () => amatuerJob(params),
      },
      {
        queryKey: ['amatuer', 'count', dongName, industryName],
        queryFn: () => amatuerCount(params),
      },
    ],
  });
  const data = useMemo(
    () => ({
      sales: response[0].data,
      life: response[1].data,
      resident: response[2].data,
      job: response[3].data,
      count: response[4].data,
    }),
    [response]
  );
  const isSuccess = useMemo(
    () => response.every((e) => e.isSuccess),
    [response]
  );
  const isLoading = useMemo(
    () => response.some((e) => e.isLoading),
    [response]
  );
  const isError = useMemo(() => response.some((e) => e.isError), [response]);

  return { data, isSuccess, isLoading, isError };
};

// 이미사장 데이터
export const timeLabels = [
  '0~6시',
  '6~11시',
  '11~14시',
  '14~17시',
  '17~21시',
  '21~24시',
];
export const weekLabels = ['월', '화', '수', '목', '금', '토', '일'];
const genderLabels = ['남성', '여성'];
const ageLabels = ['10대', '20대', '30대', '40대', '50대', '60대 이상'];
const yearLabels = [2017, 2018, 2019, 2020, 2021];
const storeCntLabels = [
  '2020년 1분기',
  '2020년 2분기',
  '2020년 3분기',
  '2020년 4분기',
  '2021년 1분기',
  '2021년 2분기',
  '2021년 3분기',
  '2021년 4분기',
];

const simulLabels = [
  '2022년 4분기',
  '2023년 1분기',
  '2023년 2분기',
  '2023년 3분기',
  '2023년 4분기',
];

export const genderGrad = [
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

// default Value
const genderDefault = [0, 0];
const timeDefault = [0, 0, 0, 0, 0, 0];
const ageDefault = [0, 0, 0, 0, 0, 0];
const weekDefault = [0, 0, 0, 0, 0, 0, 0];
const quarterDefault = [0, 0, 0, 0];
const cntDefault = [0, 0, 0, 0, 0, 0, 0, 0];
const yearDefault = [0, 0, 0, 0, 0];

/* 업종 분석 */
export const useStoreData = (amatuerResult: any) => {
  // 해당 동 점포 수 (2021.4분기, 2020.4분기)
  const storeCntData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: ['2020년', '2021년'],
        datasets: [
          {
            label: '해당 업종 점포 수(개소)',
            data: amatuerResult
              ? [amatuerResult.store.yearAgo, amatuerResult.store.total]
              : [0, 0],
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
          [0, '#B6ACF1c0'],
          [1, '#27CFFBc0'],
        ],
        [
          [0, '#B6ACF1'],
          [1, '#27CFFB'],
        ],
      ],
    }),
    [amatuerResult]
  );

  // 해당 동 업종별 고객 성비(2021.4분기)
  const storeGenderData = useMemo(
    () => ({
      type: 'pie',
      data: {
        labels: genderLabels.map((e: string) => `${e}(%)`),
        datasets: [
          {
            label: '매출',
            barThickness: 70,
            data: amatuerResult ? amatuerResult.store.gender : genderDefault,
            datalabels: {
              // 데이터라벨 숨김
              color: 'white',
            },
          },
        ],
      },
      grad: genderGrad,
    }),
    [amatuerResult]
  );

  // 해당동 업종 대분류별 고객 연령대 비율(2021.4분기)
  const storeAgeData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: ageLabels,
        datasets: [
          {
            label: '유동 인구',
            data: amatuerResult ? amatuerResult.store.age : ageDefault,
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
      type: 'line',
      data: {
        labels: yearLabels,
        datasets: [
          {
            label: '총 매출(만 원)',
            data: amatuerResult
              ? amatuerResult.sales.total.map((e: number) =>
                  Math.round(e / 10000)
                )
              : ageDefault,
            borderColor: '#B29AF8',
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [[[0, '#B29AF8']]],
    }),
    [amatuerResult]
  );

  // 매출 Top3 상권
  const salesAreaTop3Data = useMemo(
    () => (amatuerResult ? amatuerResult.sales.top3 : ['', '', '']),
    [amatuerResult]
  );

  // 일별 매출
  const salesWeekData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: weekLabels,
        datasets: [
          {
            label: '요일별 매출(만 원)',
            data: amatuerResult
              ? amatuerResult.sales.week.map((e: number) =>
                  Math.round(e / 10000)
                )
              : weekDefault,
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
    [amatuerResult]
  );

  // 시간대별 매출
  const salesTimeData = useMemo(
    () => ({
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [
          {
            label: '시간대별 매출(만 원)',
            data: amatuerResult
              ? amatuerResult.sales.time.map((e: number) =>
                  Math.round(e / 10000)
                )
              : timeDefault,
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
    [amatuerResult]
  );

  // 연령별 매출
  const salesAgeData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: ageLabels,
        datasets: [
          {
            label: '연령대별 매출(만 원)',
            data: amatuerResult
              ? amatuerResult.sales.age.map((e: number) =>
                  Math.round(e / 10000)
                )
              : ageDefault,
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
      type: 'pie',
      data: {
        labels: genderLabels.map((e: string) => `${e}(만 원)`),
        datasets: [
          {
            label: '매출',
            barThickness: 70,
            data: amatuerResult
              ? amatuerResult.sales.gender.map((e: number) =>
                  Math.round(e / 10000)
                )
              : genderDefault,
            datalabels: {
              // 데이터라벨 숨김
              color: 'white',
            },
          },
        ],
      },
      grad: genderGrad,
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
      type: 'line',
      data: {
        labels: yearLabels,
        datasets: [
          {
            label: '총 유동인구 추이(만 명)',
            data: amatuerResult
              ? amatuerResult.living.total.map((e: number) =>
                  Math.round(e / 10000)
                )
              : [0, 0, 0, 0, 0],
            borderColor: '#B29AF8',
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [[[0, '#B29AF8']]],
    }),
    [amatuerResult]
  );

  // 동 기준 유동인구 top3 상권
  const livingAreaTop3Data = useMemo(
    () => (amatuerResult ? amatuerResult.living.top3 : ['', '', '']),
    [amatuerResult]
  );

  // 동 기준 일별 유동인구
  const livingWeekData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: weekLabels,
        datasets: [
          {
            label: '요일별 유동인구(만 명)',
            data: amatuerResult
              ? amatuerResult.living.week.map((e: number) =>
                  Math.round(e / 10000)
                )
              : weekDefault,
            barThickness: 40,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: weekGrad,
    }),
    [amatuerResult]
  );

  // 동 기준 시간대별 유동인구
  const livingTimeData = useMemo(
    () => ({
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [
          {
            label: '시간대별 유동인구(만 명)',
            data: amatuerResult
              ? amatuerResult.living.time.map((e: number) =>
                  Math.round(e / 10000)
                )
              : timeDefault,
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
    [amatuerResult]
  );

  // 동 기준 연령대별 유동인구
  const livingAgeData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: ageLabels,
        datasets: [
          {
            label: '연령대별 유동인구(만 명)',
            data: amatuerResult
              ? amatuerResult.living.age.map((e: number) =>
                  Math.round(e / 10000)
                )
              : ageDefault,
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
      type: 'pie',
      data: {
        labels: genderLabels.map((e: string) => `${e}(만 명)`),
        datasets: [
          {
            barThickness: 70,
            data: amatuerResult
              ? amatuerResult.living.gender.map((e: number) =>
                  Math.round(e / 10000)
                )
              : genderDefault,
            datalabels: {
              // 데이터라벨 숨김
              color: 'white',
            },
          },
        ],
      },
      grad: genderGrad,
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
      type: 'bar',
      data: {
        labels: storeCntLabels,
        datasets: [
          {
            label: '개업 현황(개소)',
            data: amatuerResult ? amatuerResult.open.open : cntDefault,
            barThickness: 40,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#B6ACF1'],
          [1, '#27CFFB'],
        ],
      ],
      options: {
        legend: {
          display: false,
        },
      },
    }),
    [amatuerResult]
  );

  const storeCntOpenRateData = useMemo(
    () => ({
      type: 'line',
      data: {
        labels: storeCntLabels,
        datasets: [
          {
            label: '개업률(%)',
            data: amatuerResult ? amatuerResult.open.open : cntDefault,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
            borderColor: '#27CFFB',
          },
        ],
      },
      grad: [[[0, '#27CFFB']]],
    }),
    [amatuerResult]
  );

  const storeCntCloseData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: storeCntLabels,
        datasets: [
          {
            label: '폐업 현황(개소)',
            data: amatuerResult ? amatuerResult.close.close : cntDefault,
            barThickness: 40,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#ECA6DD'],
          [1, '#FE5D84'],
        ],
      ],
    }),
    [amatuerResult]
  );

  const storeCntCloseRateData = useMemo(
    () => ({
      type: 'line',
      data: {
        labels: storeCntLabels,
        datasets: [
          {
            label: '폐업률( %)',
            barThickness: 70,
            data: amatuerResult ? amatuerResult.close.rate : cntDefault,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
            // backgroundColor: '#FE5D84',
            borderColor: '#FE5D84',
          },
        ],
      },
      grad: [[[0, '#FE5D84']]],
    }),
    [amatuerResult]
  );

  return {
    storeCntOpenData,
    storeCntCloseData,
    storeCntOpenRateData,
    storeCntCloseRateData,
  };
};

/* 상권 배후지 */
export const useHinterlandData = (amatuerResult: any) => {
  const hinterlandPeopleData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: ['유동 인구', '직장 인구', '거주 인구'],
        datasets: [
          {
            label: '상권 배후지 인구(만 명)',
            data: amatuerResult
              ? [
                  Math.round(amatuerResult.hinterland.living / 10000),
                  Math.round(amatuerResult.hinterland.work / 10000),
                  Math.round(amatuerResult.hinterland.resident / 10000),
                ]
              : [0, 0, 0],
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
      type: 'bar',
      data: {
        labels: ageLabels,
        datasets: [
          {
            label: '연령대별 인구(명)',
            data: amatuerResult ? amatuerResult.hinterland.age : ageDefault,
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
      type: 'pie',
      data: {
        labels: genderLabels.map((e: string) => `${e}(명)`),
        datasets: [
          {
            barThickness: 70,
            data: amatuerResult
              ? amatuerResult.hinterland.gender
              : genderDefault,
            datalabels: {
              // 데이터라벨 숨김
              color: 'white',
            },
          },
        ],
      },
      grad: genderGrad,
    }),
    [amatuerResult]
  );

  return { hinterlandPeopleData, hinterlandAgeData, hinterlandGenderData };
};

export const useRiskData = (amatuerResult: any) => {
  const riskData = useMemo(
    () =>
      amatuerResult
        ? { risk: amatuerResult.risk, riskRate: amatuerResult.riskRate }
        : { risk: 1, riskRate: 0 },
    [amatuerResult]
  );

  return { riskData };
};

// 시뮬레이션 데이터
export const useAmatuerSimulationData = (amatuerSimulation: any) => {
  const amaSimulSalesData = useMemo(
    () => ({
      type: 'line',
      data: {
        labels: simulLabels,
        datasets: [
          {
            label: '매출(만 원)',
            data: amatuerSimulation?.sales
              ? amatuerSimulation.sales.map((e: any) =>
                  Math.round(e.value / 10000)
                )
              : [0, 0, 0, 0, 0],
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
            fill: true,
            borderColor: ['#B29AF8a0'],
            tension: 0.5,
          },
        ],
      },
      // grad: timeGrad,
      grad: [
        [
          [0, '#ff000000'],
          [0.262, '#ff000000'],
          [0.262, '#B29AF830'],
          [1, '#B29AF8a0'],
        ],
      ],
    }),
    [amatuerSimulation]
  );
  const amaSimulLifeData = useMemo(
    () => ({
      type: 'line',
      data: {
        labels: simulLabels,
        datasets: [
          {
            label: '유동인구(만 명)',
            data: amatuerSimulation?.life
              ? amatuerSimulation.life.map((e: any) =>
                  Math.round(e.value / 10000)
                )
              : [0, 0, 0, 0, 0],
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
            fill: true,
            borderColor: ['#B29AF8a0'],
            tension: 0.5,
          },
        ],
      },
      grad: [
        [
          [0, '#ff000000'],
          [0.262, '#ff000000'],
          [0.262, '#B29AF830'],
          [1, '#B29AF8a0'],
        ],
      ],
    }),
    [amatuerSimulation]
  );
  const amaSimulResidentData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: simulLabels,
        datasets: [
          {
            label: '거주인구(명)',
            data: amatuerSimulation?.resident
              ? amatuerSimulation.resident.map((e: any) => e.value)
              : [0, 0, 0, 0, 0],
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#545BF980'],
          [1, '#545BF9'],
        ],
      ],
    }),
    [amatuerSimulation]
  );
  const amaSimulJobData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: simulLabels,
        datasets: [
          {
            label: '직업인구(명)',
            data: amatuerSimulation?.job
              ? amatuerSimulation.job.map((e: any) => e.value)
              : [0, 0, 0, 0, 0],
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#FC6DD180'],
          [1, '#FC6DD1'],
        ],
      ],
    }),
    [amatuerSimulation]
  );
  const amaSimulCountData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: simulLabels,
        datasets: [
          {
            label: '점포 수(개소)',
            data: amatuerSimulation?.count
              ? amatuerSimulation.count.map((e: any) => e.value)
              : [0, 0, 0, 0, 0],
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#23CFFA80'],
          [1, '#23CFFA'],
        ],
      ],
    }),
    [amatuerSimulation]
  );

  return {
    amaSimulSalesData,
    amaSimulLifeData,
    amaSimulResidentData,
    amaSimulJobData,
    amaSimulCountData,
  };
};
