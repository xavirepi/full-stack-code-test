import React from 'react';

import { Link } from 'react-router-dom';

const Books = () => {
  return (
    <div className='card my-2'>
      <img className='card-img-top' src='./assets/imgs/.png' alt='all-books-img'/>
      <div className='card-body'>
          <Link to='/books/'>All Books</Link>
          <p className='card-text text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam ipsum neque, sodales eu rutrum hendrerit, elementum id purus. 
            Fusce eleifend, justo nec finibus tristique, augue orci auctor nisl, ut tincidunt enim velit ac quam. 
            Pellentesque posuere volutpat quam non vehicula. Etiam maximus mi at magna ultrices, quis facilisis ex lobortis. 
            Pellentesque quis enim euismod, lobortis est in, consequat dui. In suscipit massa at accumsan eleifend. 
            Vestibulum aliquam efficitur est at dapibus. Nulla facilisi. 
            Cras condimentum auctor ipsum, eget vestibulum risus condimentum vel.
          </p>
      </div>
    </div>
  );
};

export default Books;