import { useMemo } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { professionalResult } from '../api/professional';
import { ProfessionalResultParams } from '../models/professional';

export const useProfessionalResult = (
  proResultParams: ProfessionalResultParams
) => {
  return useQuery({
    queryKey: ['professional', 'result'],
    queryFn: () => professionalResult(proResultParams),
  });

export const useProfessionalData = (result: any) => {
  const areaData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: ['내 가게 면적', '평균 가게 면적'],
        datasets: [
          {
            label: ['내 가게 면적'],
            data: [42, result.store.area],
            // backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
          },
        ],
      },
      options: {
        indexAxis: 'y',
      },
      grad: [
        [
          [0, '#49D0A8'],
          [0.8, '#F9F254'],
        ],
        [[0, '#ebdd4a']],
      ],
    }),
    [result]
  );
  const salesData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: ['내 월 매출', '평균 월 매출'],
        datasets: [
          {
            label: ['내 가게 월 매출'],
            data: [6000000, result.sales.sales / 3],
            backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
            borderRadius: 300,
            // borderWidth: 5,
            // borderColor: 'rgb(255, 99, 125)',
          },
        ],
      },
      grad: [
        [
          [0, '#49D0A8'],
          [0.8, '#F9F254'],
        ],
        [[0, '#ebdd4a']],
      ],
    }),
    [result]
  );
  const clerkData = useMemo(
    () => ({
      type: 'bar',
      data: {
        labels: ['내 가게 직원 수', '평균 직원 수'],
        datasets: [
          {
            label: ['내 가게 직원 수'],
            data: [6, result.store.clerk],
            backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
            borderRadius: 100,
          },
        ],
      },
      grad: [
        [
          [0, '#49D0A8'],
          [0.8, '#F9F254'],
        ],
        [[0, '#ebdd4a']],
      ],
    }),
    [result]
  );
  const frData = useMemo(
    () => ({
      type: 'doughnut',
      data: {
        labels: ['총 점포 수', '프랜차이즈 수'],
        datasets: [
          {
            data: [Math.ceil(result.store.total), result.store.franchise],
            backgroundColor: ['#edf3f1', 'rgb(255, 205, 86)'],
            hoverOffset: 5,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: '총 점포 수 대비 프랜차이즈 점포 수',
          },
        },
      },
      grad: [
        [[0, '#edf3f1']],
        [
          [1, '#49D0A8'],
          [0.7, '#F9F254'],
        ],
      ],
    }),
    [result]
  );
  const ocData = useMemo(
    () => ({
      type: 'doughnut',
      data: {
        labels: ['총 점포 수', '개업 점포 수', '폐업 점포 수'],
        datasets: [
          {
            data: [
              Math.ceil(result.store.total),
              result.status.open,
              result.status.close,
            ],
            backgroundColor: [
              '#edf3f1',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
            hoverOffset: 5,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: '총 점포 수 및 개폐업 점포 수',
          },
        },
      },
    }),
    [result]
  );

  return { areaData, salesData, clerkData, frData, ocData };
};
