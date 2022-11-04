import { useQuery, useMutation } from '@tanstack/react-query';
import { userSignUp, helloUser, userLogin } from '../api/user';
import { UserModel } from '../models/user';

export const useHelloUser = (username: string) =>
  useQuery({ queryKey: ['user', 'hello'], queryFn: () => helloUser(username) });

export const useUserSignUp = () =>
  useMutation({
    mutationFn: (signUpParams: UserModel) => userSignUp(signUpParams),
  });

export const useUserLogin = () =>
  useMutation({
    mutationFn: (loginParams: UserModel) => userLogin(loginParams),
  });
