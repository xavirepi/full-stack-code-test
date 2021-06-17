import axios from 'axios';

export const create = (opts = {}) => {
  const http = axios.create({
    baseURL: 'http://localhost:3001/api',
    ...opts
  });

  http.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
  );

  return http;
}


