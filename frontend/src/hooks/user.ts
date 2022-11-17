import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  userSignUp,
  helloUser,
  userLogin,
  userInfo,
  storeInfo,
  storeInfoFix,
} from '../api/user';
import { UserModel } from '../models/user';
import { ProfessionalResultParams } from '../models/professional';

export const useHelloUser = (username: string) =>
  useQuery({ queryKey: ['user', 'hello'], queryFn: () => helloUser(username) });

export const useUserSignUp = () =>
  useMutation({
    mutationFn: (signUpParams: UserModel) => userSignUp(signUpParams),
  });

export const useUserLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (loginParams: UserModel) => userLogin(loginParams),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', 'info'] });
    },
  });
};

export const useUserInfo = () =>
  useQuery({
    queryKey: ['user', 'info'],
    queryFn: () => userInfo(),
  });

export const useUserLogout = () => {
  const queryClient = useQueryClient();
  return () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('email');
    queryClient.invalidateQueries({ queryKey: ['user', 'info'] });
  };
};

export const useUserStoreInfo = () => {
  const email = sessionStorage.getItem('email');
  return useQuery({
    queryKey: ['user', 'store', 'info', email],
    queryFn: () => storeInfo(),
  });
};

export const useStoreInfoFix = () =>
  useMutation({
    mutationFn: (storeParams: ProfessionalResultParams) =>
      storeInfoFix(storeParams),
    onSuccess: (data) => {
      return data;
    },
    onError: (data) => {
      return data;
    },
  });
