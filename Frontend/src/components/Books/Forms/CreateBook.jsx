import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addBook } from '../../../services/BookService';

const validators = {
  title: value => {
    let message

    if (!value) {
      message = 'Title is required'
    }

    return message
  },
  isbn: value => {
    let message

    if (!value) {
      message = 'ISBN is required'
    } else if (value && value.length < 5) {
      message = 'Please, provide a valid ISBN code'
    }

    return message
  },
  author_first_name: value => {
    let message

    if (!value) {
      message = 'Author name or real nickname is required'
    }
    return message
  },
  author_last_name: value => {
    // let message

    // if (!value) {
    //   message = 'Please reference an author'
    // }

    // return message
  },
}

const CreateBook = () => {

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
      author_last_name: validators.author_last_name(),
    }
  });

  const [touched, setTouched] = useState({});
  const { push } = useHistory();

  const isValid = () => {
    const { errors } = state;
    return !Object.keys(errors).some(error => errors[error]);
  }

  const onSubmit = (e) => {
    const { fields } = state;
    e.preventDefault();

    if (isValid()) {
      addBook(fields)
        .then(createdBook => push(`/book/${createdBook.id}`));
    }
  }

  const onChange = (e) => {
    const { name, value } = e.target;

    console.log(e.target.value);
    
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
    <div className="CreateBook mt-4 container d-flex justify-content-center">
      <form onSubmit={onSubmit} style={{ maxWidth: 500 }}>
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
          <label htmlFor="author_first_name" className="form-label">Author</label>
          <input
              className={`form-control ${touched.author && errors.author_first_name ? 'is-invalid' : ''}`}
              type="text" id="author_first_name" name="author_first_name" placeholder='First Name...'
              value={author_first_name} onChange={onChange} onBlur={onBlur} onFocus={onFocus}
          />
          <div className="invalid-feedback">{errors.author_first_name}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="author_last_name" className="form-label">Author Last Name</label>
          <input
              className={`form-control ${touched.author_last_name && errors.author_last_name ? 'is-invalid' : ''}`}
              type="text" id="author_last_name" name="author_last_name" placeholder='Last Name...'
              value={author_last_name} onChange={onChange} onBlur={onBlur} onFocus={onFocus}
          />
          <div className="invalid-feedback">{errors.author_last_name}</div>
        </div>

        <button type="submit" className="btn btn-outline-primary" disabled={!isValid()}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBook;