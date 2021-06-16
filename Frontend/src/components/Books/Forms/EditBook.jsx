import React, { useEffect, useState } from 'react';

import { useParams} from 'react-router-dom';
import SyncLoader from "react-spinners/SyncLoader";

import { getOneBook } from '../../../services/BookService';
import BookForm from './BookForm';

const EditBook = () => {
  const [bookToEdit, setBookToEdit] = useState()
  
  const { id } = useParams();

  useEffect(() => {
    getOneBook(id)
      .then(foundBook => setBookToEdit(foundBook))
  }, [id])

  return (
    <>
      { !bookToEdit ? (
          <div>
            <SyncLoader color='#351d5c'/>
          </div>
        ) : (
          <>
            <h4>Editing Book:</h4>
            <h1>{bookToEdit.name}</h1>
            <h5>
              By {bookToEdit.author.first_name} {bookToEdit.author.last_name}
            </h5>
            <small className='text-secondary'>ISBN: {bookToEdit.isbn}</small>
            <BookForm 
              bookToEdit_author_first_name={bookToEdit.author.first_name}
              bookToEdit_author_last_name={bookToEdit.author.last_name}
              bookToEdit_name={bookToEdit.name}
              bookToEdit_id={id}
              bookToEdit_isbn={bookToEdit.isbn}
            />
          </>
        )
      }
    </>
  );
};

export default EditBook;