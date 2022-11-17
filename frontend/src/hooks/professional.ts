import { useQuery } from '@tanstack/react-query';
import { professionalResult } from '../api/professional';
import { ProfessionalResultParams } from '../models/professional';

export const useProfessionalResult = (
  proResultParams: ProfessionalResultParams
) => {
  return useQuery({
    queryKey: ['professional', 'result'],
    queryFn: () => professionalResult(proResultParams),
  });
};
