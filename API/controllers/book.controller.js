const createError = require('http-errors');
const Book = require('../models/Book.model');

module.exports.getAllBooks = (req, res, next) => {
  // Returns a list of books in the database in JSON format
}

module.exports.getOneBook = (req, res, next) => {
  // Returns a detail view of the specified book id. Nest author details in JSON format
}

module.exports.addBook = (req, res, next) => {
  // Creates a new book with the specified details - Expects a JSON body
}

module.exports.updateBook = (req, res, next) => {
  // Updates an existing book - Expects a JSON body
}