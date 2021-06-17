import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { addBook, updateBook } from '../../../services/BookService';

// const ISBN_PATTERN = /^(?:ISBN(?:-1[03])?:? )?(?=[-0-9 ]{17}$|[-0-9X ]{13}$[0-9X]{10}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?(?:[0-9]+[- ]?){2}[0-9X]$/

const validators = {
  title: value => {
    let message;

    if (!value) {
      message = 'Title is required';
    } else if (value.length < 2) {
      message = 'Title must be at least 2 characters long';
    }

    return message;
  },
  isbn: value => {
    let message;

    if (!value) {
      message = 'ISBN code is required';
    } 
    // else if (value && !value.match(ISBN_PATTERN)) {
    //   message = 'Please, provide a valid ISBN code'
    // }

    return message
  },
  author_first_name: value => {
    let message;

    if (!value) {
      message = 'Author name or official nickname is required';
    } else if (value.length < 4) {
      message = 'Name must be at least 4 characters long';
    } else if (typeof value !== 'string') {
      message = 'Please, provide a valid name';
    }

    return message;
  },
}

const BookForm = ({ bookToEdit_id }) => {

  const [state, setState] = useState({
    fields: {
      title: '',
      isbn: '',
      author_first_name: '',
      author_last_name: '',
    },
    errors: {
      title: validators.title(),
      isbn: validators.isbn(),
      author_first_name: validators.author_first_name(), 
    }
  });

  const [touched, setTouched] = useState({});
  const { push } = useHistory();

  const isValid = () => {
    const { errors } = state;
    return !Object.keys(errors).some(error => errors[error]);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      name: title,
      isbn: isbn,
      author: {
        first_name: author_first_name,
        last_name: author_last_name
      }
    }

    if (isValid()) {
      !bookToEdit_id ?
        addBook(newBook)
          .then(createdBook => push(`/book/${createdBook.id}`)) :
        updateBook(newBook, bookToEdit_id)
          .then(updatedBook => push(`/book/${updatedBook.id}`))
    }
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    
    setState(prevState => ({
      fields: {
        ...prevState.fields,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: validators[name] && validators[name](value)
      }
    }));
  }

  const onBlur = (e) => {
    const { name } = e.target;

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true
    }));
  }

  const onFocus = (e) => {
    const { name } = e.target;

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: false
    }));
  }

  const { title, isbn, author_first_name, author_last_name } = state.fields;
  const { errors } = state;

  return (
    <div className="BookForm">
    { !bookToEdit_id && <h1>Create New Book</h1> }
    <div className="CreateBook mt-4 container d-flex justify-content-center">
      <form onSubmit={onSubmit} style={{ maxWidth: '20rem' }}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Book Title</label>
          <input
              className={`form-control ${touched.title && errors.title ? 'is-invalid' : ''}`}
              type="name" id="title" name="title" autoComplete="off" placeholder="Write book title..."
              value={title} onChange={onChange} onBlur={onBlur} onFocus={onFocus}
          />
          <div className="invalid-feedback">{errors.title}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="isbn" className="form-label">ISBN Code</label>
          <input
              className={`form-control ${touched.isbn && errors.isbn ? 'is-invalid' : ''}`}
              type="text" id="isbn" name="isbn" placeholder="ISBN code..."
              value={isbn} onChange={onChange} onBlur={onBlur} onFocus={onFocus}
          />
          <div className="invalid-feedback">{errors.isbn}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="author_first_name" className="form-label">Author Info</label>
          <input
              className={`form-control ${touched.author_first_name && errors.author_first_name ? 'is-invalid' : ''}`}
              type="text" id="author_first_name" name="author_first_name" placeholder='First Name...'
              value={author_first_name} onChange={onChange} onBlur={onBlur} onFocus={onFocus}
          />
          <div className="invalid-feedback">{errors.author_first_name}</div>
        </div>

        <div className="mb-3">
          <input
              className={`form-control ${touched.author_last_name && errors.author_last_name ? 'is-invalid' : ''}`}
              type="text" id="author_last_name" name="author_last_name" placeholder='Last Name...'
              value={author_last_name} onChange={onChange} onBlur={onBlur} onFocus={onFocus}
          />
          <div className="invalid-feedback">{errors.author_last_name}</div>
        </div>

        <small className="text-secondary">
          Check the <Link to="/books/" target='_blank'>list of books</Link> to check whether the author has been registered
        </small>

        <button type="submit" disabled={!isValid()}>
          {!bookToEdit_id ? 'Create' : 'Update'}
        </button>

        <br/>

        <Link to={!bookToEdit_id ? `/` : `/book/${bookToEdit_id}`}>Cancel</Link>
      </form>
    </div>
    </div>
  );
};

export default BookForm;