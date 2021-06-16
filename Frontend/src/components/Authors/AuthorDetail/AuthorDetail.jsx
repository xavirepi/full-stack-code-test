import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import SyncLoader from "react-spinners/SyncLoader";

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
            <div className="">
                <h1>{author.first_name} {author.last_name}'s Author Page</h1>
                <br/>
                <h4>Books by author</h4>
                {
                  authorBooks && authorBooks.map(book => (
                    <div key={book.id}>
                      <Link to={`/book/${book.id}`}>{book.name}</Link>
                    </div>
                  ))
                }
              <p>
                <Link to={`/author/update/${author.id}`}>Update Author</Link>
              </p>
            </div>
          )
      }
    </div>
  );
};

export default AuthorDetail;