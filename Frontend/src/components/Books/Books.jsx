import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import './Books.scss'

import { getAllBooks } from '../../services/BookService.js';
import SyncLoader from "react-spinners/SyncLoader";


const Books = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    getAllBooks()
      .then(allBooks => setBooks(allBooks))
  }, [])

  return (
<div className="Books">
  <h1>All Books</h1>
    { !books ? (
        <div>
          <SyncLoader color='#351d5c'/>
        </div>
      ) : (
        books.map(book => (
            <Link to={`/book/${book.id}`}>
              <div className="Books__list" key={book.id}>
                  <p>{book.name}</p> 
              </div>
            </Link>
        ))
      )
    }
    </div>
  );
};

export default Books;