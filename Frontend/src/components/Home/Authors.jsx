import React from 'react';

import { Link } from 'react-router-dom';

const Authors = () => {
  return (
    <div className='card my-2'>
      <img className='card-img-top' src='./images/authors.jpeg' alt='all-authors-img'/>
      <div className='card-body'>
          <Link to='/authors/'>All Authors</Link>
          <p className='card-text text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam ipsum neque, sodales eu rutrum hendrerit, elementum id purus. 
            Fusce eleifend, justo nec finibus tristique, augue orci auctor nisl, ut tincidunt enim velit ac quam. 
          </p>
      </div>
    </div>
  );
};

export default Authors;