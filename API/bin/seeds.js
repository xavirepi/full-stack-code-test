const mongoose = require('mongoose');
const faker = require('faker');

const Author = require('../models/Author.model');
const Book = require('../models/Book.model');

require('../config/db.config');

mongoose.connection.once('open', () => {
  console.info(`*** Connected to the database ${mongoose.connection.db.databaseName} ***`);

  mongoose.connection.db.dropDatabase()
    .then(() => console.log('Database clear'))
    .then(() => {
      const authors = [];

      for (let i = 0; i < 20; i ++) {
        authors.push({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName()
        });
      };

      return Author.create(authors);
    })
    .then(authors => {
      console.log(`${authors.length} authors created`);

      const books = [];

      authors.map(author => {
        for (let i = 0; i < 10; i ++) {
          books.push({
            name: faker.random.words(),
            isbn: faker.phone.phoneNumberFormat(),
            author: author._id
          })
        }
      })

      return Book.create(books);
    })
    .then(books => console.log(`${books.length} books created`))
    .then(() => console.info('All books and authors created!'))
    .catch(error => console.error(error))
    .finally(() => process.exit(0));
})