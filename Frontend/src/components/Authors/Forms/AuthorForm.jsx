import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { addAuthor, updateAuthor } from '../../../services/AuthorService';

const validators = {
  first_name: value => {
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

const AuthorForm = ({ authorToEdit_id }) => {

  const [state, setState] = useState({
    fields: {
      first_name: '',
      last_name: '',
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
      !authorToEdit_id ?
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

    authorToEdit_id && setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true
    }));
  }

  const onFocus = (e) => {
    const { name } = e.target;

    authorToEdit_id && setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: false
    }));
  }

  const { first_name, last_name } = state.fields;
  const { errors } = state;

  return (
    <div className="AuthorForm">
    { !authorToEdit_id && <h1>Create New Author</h1> }
    <div className="CreateAuthor mt-4 container d-flex justify-content-center">
      <form onSubmit={onSubmit} style={{ maxWidth: '20rem' }}>
        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">Author Info</label>
          <input
              className={`form-control ${touched.first_name && errors.first_name ? 'is-invalid' : ''}`}
              type="text" id="first_name" name="first_name" placeholder='First Name...'
              value={first_name} onChange={onChange} onBlur={onBlur} onFocus={onFocus}
          />
          <div className="invalid-feedback">{errors.first_name}</div>
        </div>

        <div className="mb-3">
          <input
              className={`form-control ${touched.last_name && errors.last_name ? 'is-invalid' : ''}`}
              type="text" id="last_name" name="last_name" placeholder='Last Name...'
              value={last_name} onChange={onChange} onBlur={onBlur} onFocus={onFocus}
          />
          <div className="invalid-feedback">{errors.last_name}</div>
        </div>

        <small className="text-secondary">
          Check the <Link to="/authors/" target='_blank'>list of authors</Link> to check whether the author has been registered
        </small>

        <button type="submit" className="m-3" disabled={!isValid()}>
          {!authorToEdit_id ? 'Create' : 'Update'}
        </button>

        <br/>

        <Link to={!authorToEdit_id ? `/` : `/author/${authorToEdit_id}`}>Cancel</Link>
      </form>
    </div>
    </div>
  );
};

export default AuthorForm;