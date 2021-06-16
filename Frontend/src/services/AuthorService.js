import { create } from './BaseService';

const http = create();

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
  console.log(id)
  return http.put(`/author/${id}`, updatedAuthor);
}