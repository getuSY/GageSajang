import { useQuery, useMutation } from '@tanstack/react-query';
import { professionalResult } from '../api/professional';
import { ProfessionalResultParams } from '../models/professional';

export const useProfessionalResult = () =>
  useMutation({
    mutationFn: (proResultParams: ProfessionalResultParams) =>
      professionalResult(proResultParams),
  });
