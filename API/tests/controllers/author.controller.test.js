const supertest = require('supertest');
const app = require('../../app');
const request = supertest(app);
const mongoose = require('mongoose');
const Author = require('../../models/Author.model');
const authorsData = require('../../data/authors.json');

afterAll(async () => {
  await mongoose.connection.close();
});

beforeAll(async () => {
  await Author.create(authorsData);
});

it('get all authors', async () => {
  const res = await request.get('/api/authors/')

  expect(res.status).toBe(200);
});