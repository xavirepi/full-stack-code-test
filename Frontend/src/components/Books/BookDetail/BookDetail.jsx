import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useParams } from 'react-router';
import SyncLoader from "react-spinners/SyncLoader";
import { getOneBook } from '../../../services/BookService';

const BookDetail = () => {
  const [book, setBook] = useState();

  const { id } = useParams();
 
  useEffect(() => {
    getOneBook(id)
      .then(foundBook => setBook(foundBook))
  }, [id]);

  return (
    <div className="Book Detail">
      <h1>Book Page</h1>
      { !book ? (
          <div>
            <SyncLoader color='#351d5c'/>
          </div>
        ) : (
            <div className="">
              <p>Title: {book.name}</p>
              <p>ISBN: {book.isbn}</p>
              <p>
                Author: 
                <Link to={`/author/${book.author.id}`}>
                  {book.author.first_name} {book.author.last_name}
                </Link>
              </p>
              <p>
                <Link to={`/book/update/${book.id}`}>Update Book</Link>
              </p>
            </div>
          )
      }
    </div>
  );
};

export default BookDetail;