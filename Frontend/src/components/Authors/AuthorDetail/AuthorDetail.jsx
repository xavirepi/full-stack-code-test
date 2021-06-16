import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import SyncLoader from "react-spinners/SyncLoader";

import './AuthorDetail.scss';

import { useParams } from 'react-router';
import { getOneAuthor } from '../../../services/AuthorService';
import { getAllBooks } from '../../../services/BookService';

const AuthorDetail = () => {
  const [author, setAuthor] = useState();
  const [authorBooks, setAuthorBooks] = useState();

  const { id } = useParams();
 
  useEffect(() => {
    getOneAuthor(id)
      .then(foundAuthor => setAuthor(foundAuthor))
  }, [id]);

  useEffect(() => {
    getAllBooks()
      .then(allBooks => {
        let filteredBooks = allBooks.filter(book => book.author.id === id); // Comes populated from DB
        setAuthorBooks(filteredBooks);
      })
  }, [id])
  
  return (
    <div className="AuthorDetail">
      { !author ? (
          <div>
            <h1>Author Page</h1>
            <SyncLoader color='#351d5c'/>
          </div>
        ) : (
            <div>
                <h4>Author's Page</h4>
                <h1>{author.first_name} {author.last_name}</h1>
                <br/>
                <h4>Books by author: {!authorBooks && 'No books'}</h4>
                {
                  authorBooks &&
                  authorBooks.map(book => (
                    <div key={book.id}>
                      <Link to={`/book/${book.id}`}>{book.name}</Link>
                    </div>
                  ))
                }
              <button>
                <Link to={`/author/update/${author.id}`}>Update Author</Link>
              </button>
            </div>
          )
      }
    </div>
  );
};

export default AuthorDetail;