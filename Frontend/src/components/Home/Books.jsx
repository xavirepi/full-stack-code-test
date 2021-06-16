import React from 'react';

import { Link } from 'react-router-dom';

const Books = () => {
  return (
    <div className='card my-2'>
      <img className='card-img-top' src='./images/books.jpeg' alt='all-books-img'/>
      <div className='card-body'>
          <Link to='/books/'>All Books</Link>
          <p className='card-text text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam ipsum neque, sodales eu rutrum hendrerit, elementum id purus. 
            Fusce eleifend, justo nec finibus tristique, augue orci auctor nisl, ut tincidunt enim velit ac quam. 
          </p>
      </div>
    </div>
  );
};

export default Books;