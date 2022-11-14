import { useQuery, useMutation } from '@tanstack/react-query';
import {
  AmaSalesSimulation,
  ProSalesSimulation,
  ProSimulationInfo,
} from '../api/simulation';
import { SimulationParams } from '../models/simultaion';

// 실사용
export const useProSalesSimulation = () =>
  useMutation({
    mutationFn: (proSimulParams: SimulationParams) =>
      ProSalesSimulation(proSimulParams),
  });

export const useProSimulInfo = (params: SimulationParams) =>
  useQuery({
    queryKey: ['professional', 'simulation', 'information'],
    queryFn: () => ProSimulationInfo(params),
  });

export const useAmaSalesSimulation = (params: SimulationParams) =>
  useQuery({
    queryKey: ['amatuer', 'simulation', 'sales'],
    queryFn: () => AmaSalesSimulation(params),
  });
