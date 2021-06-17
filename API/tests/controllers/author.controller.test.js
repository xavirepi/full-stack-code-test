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

describe('Author Controller', () => {
  // console.log('Authors Controller');

  test('Get all authors', async () => {
    // console.log('Get all authors list');
    const res = await request.get('/api/authors/');

    expect(res.status).toBe(200);
    expect(res.status).not.toBeGreaterThanOrEqual(400);
  });

  test('Get one author', async () => {
    // console.log('Get one author');
    const id = "60c8dafc021c666acbf112b9"; // Author: Javier Repilado
    const res = await request.get(`/api/author/${id}/`);

    expect(res.status).toBe(200);
    expect(res.status).not.toBeGreaterThanOrEqual(404);
  });


  test('Create one author', async () => {
    const body = {
      "first_name": 'Test_First_Name',
      "last_name": 'Test_Last_Name'
    }

    const res = await request.post(`/api/author/`).send(body);

    expect(res.status).toBe(201);
    expect(res.status).not.toBeGreaterThanOrEqual(400);
  });

  test('Update one author', async () => {
    const body = {
      id: "60c8dafc021c666acbf112b9", // Author: Javier Repilado
      first_name: 'Update_First_Name',
      last_name: 'Update_Last_Name'
    }

    const res = await request.put(`/api/author/${body.id}`).send(body);

    expect(res.status).toBe(201);
    expect(res.status).not.toBeGreaterThanOrEqual(400);
  });

});