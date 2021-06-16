import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { addAuthor, updateAuthor } from '../../../services/AuthorService';

const validators = {
  first_name: value => {
    let message

    if (!value) {
      message = 'Author name or official nickname is required'
    } else if (typeof value !== 'string') {
      message = 'Please, provide a valid name'
    }

    return message
  },
}

const CreateAuthor = ({ author_name, author_last_name, authorToEdit_id }) => {

  const [state, setState] = useState({
    fields: {
      first_name: author_name,
      last_name: author_last_name ,
    },
    errors: {
      first_name: validators.first_name(), 
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
      !author_name ?
        addAuthor(fields)
          .then(createdAuthor => push(`/author/${createdAuthor.id}`)) :
        updateAuthor(fields, authorToEdit_id)
          .then(updatedAuthor => push(`/author/${updatedAuthor.id}`))
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

    author_name && setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true
    }));
  }

  const onFocus = (e) => {
    const { name } = e.target;

    author_name && setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: false
    }));
  }

  const { first_name, last_name } = state.fields;
  const { errors } = state;

  return (
    <>
    { !author_name && <h1> Create New Author</h1> }
    <div className="CreateAuthor mt-4 container d-flex justify-content-center">
      <form onSubmit={onSubmit} style={{ maxWidth: 500 }}>
        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">Author</label>
          <input
              className={`form-control ${touched.first_name && errors.first_name ? 'is-invalid' : ''}`}
              type="text" id="first_name" name="first_name" placeholder={author_name && 'First Name...'}
              value={first_name} onChange={onChange} onBlur={onBlur} onFocus={onFocus}
          />
          <div className="invalid-feedback">{errors.first_name}</div>
        </div>

        <div className="mb-3">
          <input
              className={`form-control ${touched.last_name && errors.last_name ? 'is-invalid' : ''}`}
              type="text" id="last_name" name="last_name" placeholder={author_last_name && 'Last Name...'}
              value={last_name} onChange={onChange} onBlur={onBlur} onFocus={onFocus}
          />
          <div className="invalid-feedback">{errors.last_name}</div>
        </div>
        <small className="text-secondary">
          Check the <Link to="/authors/">list of authors</Link> to check whether the author has been registered
        </small>
        <button type="submit" className="btn btn-outline-primary" disabled={!isValid()}>
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default CreateAuthor;