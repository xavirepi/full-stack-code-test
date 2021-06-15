import axios from 'axios';
// import { create } from './BaseService';

// const http = create();

const http = axios.create({
  baseURL: 'http://localhost:3001/api'
});

http.interceptors.response.use(response => response.data)

export const getAllAuthors = () => {
  return http.get('/authors/');
}

export const getOneAuthor = (id) => {
  return http.get(`/author/${id}`);
}

export const addAuthor = (newAuthor) => {
  return http.post('/author/', newAuthor);
}

export const updateAuthor = (updatedAuthor, id) => {
  return http.put(`/author/${id}`, updatedAuthor);
}