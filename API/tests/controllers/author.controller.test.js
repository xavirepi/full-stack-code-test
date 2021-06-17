const supertest = require('supertest');
const app = require('../../app');
const request = supertest(app);
const mongoose = require('mongoose');
const Author = require('../../models/Author.model');
const authorsData = require('../../data/authors.json');

afterAll(async () => {
  await mongoose.connection.close();
});
