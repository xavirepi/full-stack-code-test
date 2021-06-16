import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import './BookDetail.scss';

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
    <div className="BookDetail">
      { !book ? (
          <div>
            <h1>Book Page</h1>
            <SyncLoader color='#351d5c'/>
          </div>
        ) : (
            <div>
              <h4>Book Page</h4>
              <h1>{book.name}</h1>
              <p>ISBN: {book.isbn}</p>
              <p>
                Author:
                <span className='mx-1'/>
                <Link to={`/author/${book.author.id}`}>
                  {book.author.first_name} {book.author.last_name}
                </Link>
              </p>
              <button>
                <Link to={`/book/update/${book.id}`}>Update Book</Link>
              </button>
            </div>
          )
      }
    </div>
  );
};

export default BookDetail;