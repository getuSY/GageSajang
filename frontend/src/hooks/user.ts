import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { userSignUp, helloUser, userLogin, userInfo } from '../api/user';
import { UserModel } from '../models/user';

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
    queryClient.invalidateQueries({ queryKey: ['user', 'info'] });
  };
};
