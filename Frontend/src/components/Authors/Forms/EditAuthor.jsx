import React, { useEffect, useState } from 'react';

import { useParams} from 'react-router-dom';
import SyncLoader from "react-spinners/SyncLoader";

import { getOneAuthor } from '../../../services/AuthorService';
import CreateAuthorForm from './CreateAuthor';

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
            <h1>Edit Author: {authorToEdit.first_name} {authorToEdit.last_name}</h1>
            <CreateAuthorForm 
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