import React, { useEffect, useState } from 'react';

import { useParams} from 'react-router-dom';
import SyncLoader from "react-spinners/SyncLoader";

import { getOneAuthor } from '../../../services/AuthorService';
import AuthorForm from './AuthorForm';

const EditAuthor = () => {
  const [authorToEdit, setAuthorToEdit] = useState()
  
  const { id } = useParams();

  useEffect(() => {
    getOneAuthor(id)
      .then(foundAuthor => setAuthorToEdit(foundAuthor))
  }, [id])

  return (
    <>
      { !authorToEdit ? (
          <div>
            <SyncLoader color='#351d5c'/>
          </div>
        ) : (
          <>
            <h4>Editing Author:</h4>
            <h1>{authorToEdit.first_name} {authorToEdit.last_name}</h1>
            <AuthorForm 
              author_name={authorToEdit.first_name}
              author_last_name={authorToEdit.last_name}
              authorToEdit_id={id}
            />
          </>
        )
      }
    </>
  );
};

export default EditAuthor;