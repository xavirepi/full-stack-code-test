const mongoose = require('mongoose');
const Book = require('./Book.model');

const authorSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: 'A name is required'
    },
    last_name: {
      type: String
    }
  }, 
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

authorSchema.virtual('Book', {
  ref: Book.modelName,
  localField: '_id',
  foreignField: 'author'
})

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;