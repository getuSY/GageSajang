import axios from 'axios';

export const client = axios.create({
  // baseURL: 'http://k7e205.p.ssafy.io:8081/',
  baseURL: 'https://k7e205.p.ssafy.io/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 추가하기
client.interceptors.request.use(function (config) {
  // 요청이 전달되기 전에 작업 수행
  const token = sessionStorage.getItem('token')
    ? sessionStorage.getItem('token')
    : null;
  if (token) {
    config.headers!.Authorization = token;
  }

  return config;
});

export const client1 = axios.create({
  // baseURL: 'http://k7e2051.p.ssafy.io:8081/',
  baseURL: 'https://k7e2051.p.ssafy.io/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 추가하기
client1.interceptors.request.use(function (config) {
  // 요청이 전달되기 전에 작업 수행
  const token = sessionStorage.getItem('token')
    ? sessionStorage.getItem('token')
    : null;
  if (token) {
    config.headers!.Authorization = token;
  }

  return config;
});
