const supertest = require('supertest');
const app = require('../../app');
const request = supertest(app);
const mongoose = require('mongoose');
const Book = require('../../models/Book.model');
const Author = require('../../models/Author.model');
const booksData = require('../../data/books.json');

afterAll(async () => {
  await mongoose.connection.close();
});

beforeAll(async () => {
  await Book.create(booksData);
});

describe('Book Controller', () => {

  test('Get all books', async () => {
    const res = await request.get('/api/books/');

    expect(res.status).toBe(200);
    expect(res.status).not.toBeGreaterThanOrEqual(400);
  });

  test('Get one book', async () => {
    const id = "60c8dafd021c666acbf112cd"; //
    const res = await request.get(`/api/book/${id}/`);

    expect(res.status).toBe(200);
    expect(res.status).not.toBeGreaterThanOrEqual(404);
  });


  test('Create one book', async () => {
    const body = {
      "name": "The Lord Of The Rings",
      "isbn": "454-358-0384",
      //"author": {
        "first_name": "J.R.R.",
        "last_name": "Tolkien",
      //}
    }

    const res = await request.post(`/api/book/`).send(body);

    expect(res.status).toBe(201);
    expect(res.status).not.toBeGreaterThanOrEqual(400);
  });

  test('Update one book', async () => {
    const body = {
      "name": "The Hobbit",
      "isbn": "454-358-0549",
      "author": {
        "first_name": "J.R.R.",
        "last_name": "Tolkien",
      },
    }

    const res = await request.put(`/api/book/${body.id}`).send(body);

    expect(res.status).toBe(201);
    expect(res.status).not.toBeGreaterThanOrEqual(400);
  });

});