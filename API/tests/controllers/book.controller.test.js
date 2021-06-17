const supertest = require('supertest');
const app = require('../../app');
const request = supertest(app);
const mongoose = require('mongoose');
const Book = require('../../models/Book.model');
const Author = require('../../models/Author.model');
const booksData = require('../../data/books.json');

// afterAll(async () => {
//   await mongoose.connection.close();
// });

// beforeAll(async () => {
//   await Book.create(booksData);
// });

it('get all books', async () => {
  const res = await request.get('/api/books/')

  expect(res.status).toBe(200);
});