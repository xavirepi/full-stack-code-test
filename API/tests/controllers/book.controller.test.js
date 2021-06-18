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

    expect(res.body.length).not.toBeLessThanOrEqual(0);
    expect(res.body.length).not.toBe(null);
  });

  test('Create one book and get book detail', async () => {
    /* CREATE BOOK TEST */
    const body = {
      "name": "The Lord Of The Rings",
      "isbn": "454-358-0384",
      "author": {
        "first_name": "J.R.R.",
        "last_name": "Tolkien",
      }
    }

    const res = await request.post(`/api/book/`).send(body);

    expect(res.status).toBe(201);
    expect(res.status).not.toBeGreaterThanOrEqual(400);

    expect(res.body.name).not.toBe(null);
    expect(res.body.name).toBe("The Lord Of The Rings");
    expect(res.body.isbn).not.toBe(null);
    expect(res.body.isbn).toBe("454-358-0384");
    expect(res.body.author).not.toBe(null);
    expect(res.body.author.length).toBe(24);

    /* GET ONE BOOK TEST */
    // Get One Book endpoint tested here as the id is changed dinamically on each test run and it throws an error if tested independently.
    const { id } = res.body;

    const detailRes = await request.get(`/api/book/${id}`);
  
    expect(res.status).toBeGreaterThanOrEqual(200);
    expect(res.status).not.toBeGreaterThanOrEqual(300);
    expect(detailRes.status).not.toBeGreaterThanOrEqual(400);

    expect(detailRes.body.name).toBe("The Lord Of The Rings");
    expect(detailRes.body.isbn).toBe("454-358-0384");
    expect(detailRes.body.author.first_name).toBe("J.R.R.");
    expect(detailRes.body.author.last_name).toBe("Tolkien");
    expect(detailRes.body.id).toBeDefined();
  });

  test('Update one book', async () => {
    /* CREATE BOOK TEST */
    const body = {
      "name": "The Pillars Of The Earth",
      "isbn": "454-358-0394",
      "author": {
        "first_name": "Ken",
        "last_name": "Follet",
      }
    }

    const res = await request.post(`/api/book/`).send(body);

    expect(res.status).toBeGreaterThanOrEqual(200);
    expect(res.status).not.toBeGreaterThanOrEqual(300);
    expect(res.status).not.toBeGreaterThanOrEqual(400);

    expect(res.body.name).not.toBe(null);
    expect(res.body.name).toBe("The Pillars Of The Earth");
    expect(res.body.isbn).not.toBe(null);
    expect(res.body.isbn).toBe("454-358-0394");
    expect(res.body.author).not.toBe(null);
    expect(res.body.author.length).toBe(24);

    /* GET ONE BOOK TEST */
    // Get One Book endpoint tested here as the id is changed dinamically on each test run and it throws an error if tested independently.
    const { id } = res.body;

    const updatedBody = {
      "name": "A World Without End",
      "isbn": "454-358-0575",
      "first_name": "Ken",
      "last_name": "Follet",
    }

    const detailRes = await request.put(`/api/book/${id}`).send(updatedBody);
    
    expect(detailRes.status).toBeGreaterThanOrEqual(200);
    expect(detailRes.status).not.toBeGreaterThanOrEqual(300);
    expect(detailRes.status).not.toBeGreaterThanOrEqual(400);

    expect(detailRes.body.first_name).not.toBe(null);
    expect(detailRes.body.name).toBe("A World Without End");
    expect(detailRes.body.isbn).toBe("454-358-0575");
    expect(detailRes.body.id).toBeDefined();
    expect(detailRes.body.author).toBeDefined();
  });

});