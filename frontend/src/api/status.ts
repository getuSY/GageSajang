import { client } from './client';

// 상권 현황 Map API
export const getStatusGuFPMap = async () => {
  const { data } = await client.get('/anlz/storeGu/living');
  return data;
};

export const getStatusGuRPMap = async () => {
  const { data } = await client.get('/anlz/storeGu/resident');
  return data;
};

export const getStatusGuStoresMap = async () => {
  const { data } = await client.get('/anlz/storeGu/store');
  return data;
};

export const getStatusGuOpeningMap = async () => {
  const { data } = await client.get('/anlz/storeGu/open');
  return data;
};

export const getStatusGuClosureMap = async () => {
  const { data } = await client.get('/anlz/storeGu/close');
  return data;
};

export const getStatusGuSalesMap = async () => {
  const { data } = await client.get('/anlz/storeGu/sales');
  return data;
};

// 상권 배후지 Map API
export const getStatusHinGuFPMap = async () => {
  const { data } = await client.get('/anlz/storeHinGu/living');
  return data;
};

export const getStatusHinGuRPMap = async () => {
  const { data } = await client.get('/anlz/storeHinGu/resident');
  return data;
};

export const getStatusHinGuStoresMap = async () => {
  const { data } = await client.get('/anlz/storeHinGu/store');
  return data;
};

export const getStatusHinGuOpeningMap = async () => {
  const { data } = await client.get('/anlz/storeHinGu/open');
  return data;
};

export const getStatusHinGuClosureMap = async () => {
  const { data } = await client.get('/anlz/storeHinGu/close');
  return data;
};

export const getStatusHinGuSalesMap = async () => {
  const { data } = await client.get('/anlz/storeHinGu/sales');
  return data;
};

// 상권 Top10 API
export const getStatusTrend = async () => {
  const { data } = await client.get('/anlz/store/top10');
  return data;
};
