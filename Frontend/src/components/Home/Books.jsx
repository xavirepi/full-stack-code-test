import React from 'react';

import { Link } from 'react-router-dom';

const Books = () => {
  return (
    <div className='card col-sm-4 my-3 me-1'>
      <img className='card-img-top h-50' src='./images/books.jpeg' alt='all-books-img'/>
      <div className='card-body d-flex flex-column'>
        <h4>All Books</h4>
        <p className='card-text text-justify'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nullam ipsum neque, sodales eu rutrum hendrerit, elementum id purus. 
          Fusce eleifend, justo nec finibus tristique, augue orci auctor nisl, ut tincidunt enim velit ac quam. 
        </p>
        <div className='mt-auto mb-2'>
          <Link className="justify-self-end" to='/books/'>Go To All Books</Link>
        </div>
      </div>
    </div>
  );
};

export default Books;