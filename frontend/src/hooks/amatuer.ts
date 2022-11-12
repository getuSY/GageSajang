import { useQuery } from '@tanstack/react-query';
import { amatuerResult } from '../api/amatuer';
import { AmatuerResultParams } from '../models/amatuer';

export const useAmatuerResult = (params: AmatuerResultParams) =>
  useQuery({
    queryKey: ['amatuer', 'result'],
    queryFn: () => amatuerResult(params),
  });
