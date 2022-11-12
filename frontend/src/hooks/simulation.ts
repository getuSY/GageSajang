import { useQuery, useMutation } from '@tanstack/react-query';
import {
  ProSimulationResult,
  AmaSimulationResult,
  AmaSalesSimulation,
  ProSalesSimulation,
} from '../api/simulation';
import { SimulationParams } from '../models/simultaion';

//데이터 받기 테스트용 더미
export const useProSimulationResult = (params: SimulationParams) =>
  useQuery({
    queryKey: ['professional', 'simulation'],
    queryFn: () => ProSimulationResult(params),
  });

export const useAmaSimulationResult = (params: SimulationParams) =>
  useQuery({
    queryKey: ['amatuer', 'simulation'],
    queryFn: () => AmaSimulationResult(params),
  });

// 실사용
export const useProSalesSimulation = () =>
  useMutation({
    mutationFn: (proSimulParams: SimulationParams) =>
      ProSalesSimulation(proSimulParams),
  });

export const useAmaSalesSimulation = (params: SimulationParams) =>
  useQuery({
    queryKey: ['amatuer', 'simulation', 'sales'],
    queryFn: () => AmaSalesSimulation(params),
  });
