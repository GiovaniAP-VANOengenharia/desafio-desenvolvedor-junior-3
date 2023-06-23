import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const setToken = (token: string) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint: string) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestLoginRegister = async (endpoint: string, body: Object) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestRegister = async (endpoint: string, body: Object) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestSellers = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestSale = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestAllSales = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestSellerById = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestSaleById = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestUpdateSale = async (endpoint, body) => {
  const { data } = await api.put(endpoint, body);
  return data;
};

export const requestDeleteUser = async (endpoint) => {
  await api.delete(endpoint);
};

export default api;
