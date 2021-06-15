import axios from 'axios';

export const create = (opts = {}) => {
  const http = axios.create({
    baseURL: `${process.env.REACT_APP_API_HOST} || http://localhost:3001/api`,
    ...opts
  });

  http.interceptors.response.use(response => response.data);

  return http;
}


