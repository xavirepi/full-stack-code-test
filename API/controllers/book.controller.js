const createError = require('http-errors');
const Book = require('../models/Book.model');
const Author = require('../models/Author.model');

module.exports.getAllBooks = (req, res, next) => {
  // Returns a list of books in the database in JSON format
  Book.find()
    .populate('author')
    .then(AllBooks => {
      !AllBooks ?
      next(createError(404, 'No books found')) :
      res.status(302).json(AllBooks);
    })
    .catch(next);
}

module.exports.getOneBook = (req, res, next) => {
  // Returns a detail view of the specified book id. Nest Book details in JSON format
  Book.findById(req.params.id)
    .populate('author')
    .then(foundBook => {
      !foundBook ?
      next(createError(404, 'Book not found')) :
      res.status(302).json(foundBook);
    })
    .catch(next);
}

module.exports.addBook = (req, res, next) => {
  // Creates a new book with the specified details - Expects a JSON body
  const { name, isbn, author } = req.body;
  const { first_name, last_name } = author;

  console.log('req.body', req.body)
  console.log('first_name: ', first_name, 'last_name: ', last_name)

  Book.findOne({isbn: req.body.isbn})
    .populate('author')
    .then(foundBook => {
      console.log('found Book', foundBook)
      foundBook ?
      next(createError(403, 'This Book already exists on the database')) :
      Author.findOne({ $and: [{ first_name }, { last_name }] })
        .then(foundAuthor => {
          if (foundAuthor) {
            console.log('found author', foundAuthor)
            Book.create({ name: name, isbn: isbn, author: foundAuthor._id })
              .then(createdBook => res.status(201).json(createdBook))
          } else {
            Author.create({ 
              first_name: author.first_name, 
              last_name: author.last_name
            })
              .then(createdAuthor => {
                console.log('created Author', createdAuthor)
                Book.create({ name: name, isbn: isbn, author: createdAuthor.id })
                  .then(createdBook => res.status(201).json(createdBook))
              })     
          }
        })
        .catch(next)
    })
    .catch(next);
}

module.exports.updateBook = (req, res, next) => {
  // Updates an existing book - Expects a JSON body
}