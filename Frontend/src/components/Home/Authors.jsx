import React from 'react';

import { Link } from 'react-router-dom';

const Authors = () => {
  return (
    <div className='card my-3 col-sm-4 mx-2'>
      <img className='card-img-top' src='./images/authors.jpeg' alt='all-authors-img'/>
      <div className='card-body'>
          <h4>All Authors</h4>
          <p className='card-text text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam ipsum neque, sodales eu rutrum hendrerit, elementum id purus. 
            Fusce eleifend, justo nec finibus tristique, augue orci auctor nisl, ut tincidunt enim velit ac quam. 
          </p>
          <Link to='/authors/'>Go To All Authors</Link>
      </div>
    </div>
  );
};

export default Authors;