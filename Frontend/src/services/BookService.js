import { create } from './BaseService';

const http = create();

export const getAllBooks = () => {
  return http.get('/books/');
}

export const getOneBook = (id) => {
  return http.get(`/book/${id}`);
}

export const addBook = (newBook) => {
  return http.post('/book/', newBook);
}

export const updateBook = (updatedBook, id) => {
  return http.put(`/book/${id}`, updatedBook);
}