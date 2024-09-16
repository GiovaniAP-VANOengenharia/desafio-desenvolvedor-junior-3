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

export const requestUpdatePost = async (endpoint: string, body: Object) => {
  const { data } = await api.put(endpoint, body);
  return data;
};

export const requestDeletePost = async (endpoint: string) => {
  await api.delete(endpoint);
};

export default api;
