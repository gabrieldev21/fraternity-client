/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import store from 'store';

import { baseUrl } from 'utils/config';

const api = axios.create({
  baseURL: baseUrl,
});

api.interceptors.request.use(async (config: any) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const token = store.getState()?.user?.token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
