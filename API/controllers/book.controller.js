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
      res.status(200).json(AllBooks);
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
      res.status(200).json(foundBook);
    })
    .catch(next);
}

module.exports.addBook = (req, res, next) => {
  // Creates a new book with the specified details - Expects a JSON body
  const { name, isbn, author } = req.body;
  const { first_name, last_name } = author;

  Book.findOne({isbn: req.body.isbn})
    .populate('author')
    .then(foundBook => {
      foundBook ?
      next(createError(403, 'This ISBN belongs to an already registered book')) :
      Author.findOne({ $and: [{ first_name }, { last_name }] })
        .then(foundAuthor => {
          if (foundAuthor) {
            Book.create({ name: name, isbn: isbn, author: foundAuthor._id })
              .then(createdBook => res.status(201).json(createdBook))
              .catch(next);
          } else {
            Author.create({ 
              first_name: first_name, 
              last_name: author.last_name
            })
              .then(createdAuthor => {
                Book.create({ name: name, isbn: isbn, author: createdAuthor.id })
                  .then(createdBook => res.status(201).json(createdBook))
              })
              .catch(next);     
          }
        })
        .catch(next);
    })
    .catch(next);
}

module.exports.updateBook = (req, res, next) => {
  // Updates an existing book - Expects a JSON body
  const { name, isbn, author } = req.body;
  const { first_name, last_name } = author;

  Book.findOne({ $or: [{ name }, { isbn }, {first_name}] })
    .populate('author')
    .then(foundBook => {
      foundBook ?
      next(createError(403, 'This ISBN belongs to an already registered book')) :
      Book.findById(req.params.id)
        .then(foundBook => {
          if (!foundBook) {
            next(createError(404, 'This book does not exist on the database'))
          }
          
          Object.entries(req.body).forEach(([key, value]) => {
            console.log(req.body)
            foundBook[key] = value;
          })

          return foundBook.save()
            .then(updatedBook => {
              res.status(200).json(updatedBook);
            })
        })
    })
    .catch(next);
}