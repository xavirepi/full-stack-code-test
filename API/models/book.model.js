const mongoose = require('mongoose');

require('./Author.model')

const bookSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: 'A title is required'
    },
    isbn: {
      type: String,
      required: 'An ISBN code is required',
      unique: 'ISBN code must be unique'
    },
    author: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Author',
      required: 'An author needs to be referenced'
    }
  }, 
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret._v;
        return ret;
      },
    },
  }
);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;