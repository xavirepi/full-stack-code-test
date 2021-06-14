const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');
const authorController = require('../controllers/author.controller');

/* Book Routes */
router.get('/books/', );
router.get('/books/:id/', );
router.post('/book/', );
router.put('/book/:id/', );

/* Author Routes */
router.get('/authors/', authorController.getAllAuthors);
router.get('/author/:id/', authorController.getOneAuthor);
router.post('/author/', authorController.addAuthor);
router.put('/author/:id/', authorController.updateAuthor);

module.exports = router;