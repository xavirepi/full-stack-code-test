const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');
const authorController = require('../controllers/author.controller');

/* Book Routes */
router.get('/books/', bookController.getAllBooks);
router.get('/book/:id/', bookController.getOneBook);
router.post('/book/', bookController.addBook);
router.put('/book/:id/', bookController.updateBook);

/* Author Routes */
router.get('/authors/', authorController.getAllAuthors);
router.get('/author/:id/', authorController.getOneAuthor);
router.post('/author/', authorController.addAuthor);
router.put('/author/:id/', authorController.updateAuthor);

module.exports = router;