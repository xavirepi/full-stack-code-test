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
  test('Get all authors', async () => {
    const res = await request.get('/api/authors/');

    expect(res.status).toBe(200);
    expect(res.status).not.toBeGreaterThanOrEqual(400);

    expect(res.body.length).not.toBeLessThanOrEqual(0);
    expect(res.body.length).not.toBe(null);
  });

  test('Create one author and get author detail', async () => {
    /* CREATE AUTHOR TEST */
    const body = {
      "first_name": 'Test_First_Name',
      "last_name": 'Test_Last_Name'
    }

    const res = await request.post(`/api/author/`).send(body);

    expect(res.status).toBe(201);
    expect(res.status).not.toBeGreaterThanOrEqual(400);

    expect(res.body.first_name).not.toBe(null);
    expect(res.body.first_name).toBe("Test_First_Name");
    expect(res.body.last_name).toBe("Test_Last_Name");

    /* GET AUTHOR DETAIL TEST */
    // Get One Author endpoint tested here as the id is changed dinamically on each test run and it throws an error if tested independently.
    const { id } = res.body;

    const detailRes = await request.get(`/api/author/${id}`);
  
    expect(detailRes.status).toBe(200);
    expect(detailRes.status).not.toBeGreaterThanOrEqual(400);

    expect(detailRes.body.first_name).not.toBe(null);
    expect(detailRes.body.first_name).toBe("Test_First_Name");
    expect(detailRes.body.last_name).toBe("Test_Last_Name");
    expect(detailRes.body.id).toBeDefined();
  });

  test('Update one author and get author detail', async () => {
    /* CREATE AUTHOR TEST */
    const body = {
      "first_name": 'Test2_First_Name',
      "last_name": 'Test2_Last_Name'
    }

    const res = await request.post(`/api/author/`).send(body);

    expect(res.status).toBe(201);
    expect(res.status).not.toBeGreaterThanOrEqual(400);

    expect(res.body.first_name).not.toBe(null);
    expect(res.body.first_name).toBe("Test2_First_Name");
    expect(res.body.last_name).toBe("Test2_Last_Name");

    /* GET AUTHOR DETAIL TEST */
    // Get One Author endpoint tested here as the id is changed dinamically on each test run and it throws an error if tested independently.    
    const { id } = res.body;

    const updatedBody = {
      "first_name": 'First_Name_Update',
      "last_name": 'Last_Name_Update'
    }
    
    const detailRes = await request.put(`/api/author/${id}`).send(updatedBody);

    expect(detailRes.status).toBe(200);
    expect(detailRes.status).not.toBeGreaterThanOrEqual(400);

    expect(detailRes.body.first_name).not.toBe(null);
    expect(detailRes.body.first_name).toBe("First_Name_Update");
    expect(detailRes.body.last_name).toBe("Last_Name_Update");
    expect(detailRes.body.id).toBeDefined();
  });

});