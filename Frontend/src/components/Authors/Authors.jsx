import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import './Authors.scss'

import { getAllAuthors } from '../../services/AuthorService.js';
import SyncLoader from "react-spinners/SyncLoader";

const Authors = () => {
  const [authors, setAuthors] = useState();

  useEffect(() => {
    getAllAuthors()
      .then(response => setAuthors(response))
  }, [])

  return (
    <div className="Authors">
    <h1>All Authors</h1>
    { !authors ? (
        <div>
          <SyncLoader color='#351d5c'/>
        </div>
      ) : (
        authors.map(author => (
            <Link to={`/author/${author.id}`}>
              <div className="Authors__list" key={author.id}>
                  <p>
                    {author.first_name} {author.last_name}
                  </p>
              </div>
            </Link> 
        ))
      )
    }
    </div>
  );
};

export default Authors;