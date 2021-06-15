import React, { useEffect, useState } from 'react';

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
    { !authors ? (
        <div>
          <SyncLoader color='#351d5c'/>
        </div>
      ) : (
        authors.map(author => (
          <p>{author.first_name}</p>
        ))
      )
    }
    </div>
  );
};

export default Authors;