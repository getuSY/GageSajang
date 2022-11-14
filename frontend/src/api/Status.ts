import client from './client';
// import {
//   FloatingPopulationMap,
//   ResidentPopulationMap,
//   NumberOfStoresMap,
//   OpeningRateMap,
//   ClosureRateMap,
//   SalesMap,
// } from '../models/status';

export const getStatusFPMap = async () => {
  const { data } = await client.get('/anlz/storeGu/living');
  return data;
};

export const getStatusRPMap = async () => {
  const { data } = await client.get('/anlz/storeGu/resident');
  return data;
};

export const getStatusStoresMap = async () => {
  const { data } = await client.get('/anlz/storeGu/store');
  return data;
};

export const getStatusOpeningMap = async () => {
  const { data } = await client.get('/anlz/storeGu/open');
  return data;
};

export const getStatusClosureMap = async () => {
  const { data } = await client.get('/anlz/storeGu/close');
  return data;
};

export const getStatusSalesMap = async () => {
  const { data } = await client.get('/anlz/storeGu/sales');
  return data;
};
