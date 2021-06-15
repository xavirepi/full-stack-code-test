const createError = require('http-errors');
const Author = require('../models/Author.model');

module.exports.getAllAuthors = (req, res, next) => {
  // Returns a list of books in the database in JSON format
  Author.find()
    .then(allAuthors => {
      !allAuthors ?
      next(createError(404, 'No authors found')) :
      res.status(302).json(allAuthors);
    })
    .catch(next);
}

module.exports.getOneAuthor = (req, res, next) => {
  // Returns a detail view of the specified author id
  Author.findById(req.params.id)
    .then(foundAuthor => {
      !foundAuthor ?
      next(createError(404, 'Author not found')) :
      res.status(302).json(foundAuthor);
    })
    .catch(next);
}

module.exports.addAuthor = (req, res, next) => {
  // Creates a new author with the specified details - Expects a JSON body
  const { first_name, last_name } = req.body;

  Author.findOne({ $and: [{ first_name }, { last_name }] })
    .then(foundAuthor => {
      foundAuthor ?
      next(createError(403, 'This author already exists on the database')) :
      Author.create(req.body)
        .then(createdAuthor => res.status(201).json(createdAuthor))
    })
    .catch(next);
}

module.exports.updateAuthor = (req, res, next) => {
  // Updates an existing author - Expects a JSON body
  Author.findById(req.params.id)
    .then(foundAuthor => {
      if (!foundAuthor) {
        next(createError(404, 'This author does not exist on the database'))
      }

      Object.entries(req.body).forEach(([key, value]) => {
        foundAuthor[key] = value;
      })

      return foundAuthor.save()
        .then(updatedAuthor => {
          res.status(200).json(updatedAuthor)
        })
    })
    .catch(next);
}