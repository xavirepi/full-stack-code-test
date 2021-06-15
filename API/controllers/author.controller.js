const createError = require('http-errors');
const Author = require('../models/Author.model');

module.exports.getAllAuthors = (req, res, next) => {
  Author.find({})
    .then(authors => res.json(authors))
    .catch(next);
}

module.exports.getOneAuthor = (req, res, next) => {
  // Returns a detail view of the specified author id
}

module.exports.addAuthor = (req, res, next) => {
  // Creates a new author with the specified details - Expects a JSON body
}

module.exports.updateAuthor = (req, res, next) => {
  // Updates an existing author - Expects a JSON body
}