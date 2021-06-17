const supertest = require('supertest');
const app = require('../../app');
const request = supertest(app);
const mongoose = require('mongoose');
const Book = require('../../models/Book.model');
const Author = require('../../models/Author.model');
const bookssData = require('../../data/books.json');

afterAll(async () => {
  await mongoose.connection.close();
});
