import { useQuery, useMutation } from '@tanstack/react-query';
import { signUp, helloUser, getUser } from '../api/user';
import { SignUpParams } from '../models/user';

export const useHelloUser = (username: string) =>
  useQuery({ queryKey: ['user', 'hello'], queryFn: () => helloUser(username) });

export const useCreateUser = () =>
  useMutation({
    mutationFn: (signUpParams: SignUpParams) => signUp(signUpParams),
  });

export const useFetchUser = () =>
  useQuery({ queryKey: ['user', 'fetchUser'], queryFn: () => getUser() });
