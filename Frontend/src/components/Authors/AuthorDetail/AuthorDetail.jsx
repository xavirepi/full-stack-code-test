import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useParams } from 'react-router';
import { getOneAuthor } from '../../../services/AuthorService';
import SyncLoader from "react-spinners/SyncLoader";
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
        console.log(allBooks)
        let filteredBooks = allBooks.filter(book => book.author.id === id);
        console.log(filteredBooks)
        setAuthorBooks(filteredBooks);
      })
  }, [id])
  
  return (
    <div className="AuthorDetail">
      <h1>Author Page</h1>
      { !author ? (
          <div>
            <SyncLoader color='#351d5c'/>
          </div>
        ) : (
            <div className="">
              <p>{author.first_name} {author.last_name}</p>
                <>
                  <p>Books</p>
                  {
                    authorBooks && authorBooks.map(book => (
                      <div key={book.id}>
                        <Link to={`/book/${book.id}`}>{book.name}</Link>
                      </div>
                    ))
                  }
                </>
            </div>
          )
      }
    </div>
  );
};

export default AuthorDetail;