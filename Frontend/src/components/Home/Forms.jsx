import React from 'react';

import { Link } from 'react-router-dom';

const Form = () => {
  return (
    <div className='card my-3 col-sm-4 ms-1'>
      <img className='card-img-top h-50' src='./images/add_book.jpeg' alt='add-books-and-authors-img'/>
      <div className='card-body d-flex flex-column'>
        <h4>Create</h4>
        <p className='card-text text-justify'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nullam ipsum neque, sodales eu rutrum hendrerit, elementum id purus. 
          Fusce eleifend, justo nec finibus tristique, augue orci auctor nisl, ut tincidunt enim velit ac quam. 
        </p>
        <div className='mt-auto mb-2'>
          <Link className='m-3' to='/book/create/'>Add New Book</Link>
          <Link to='/author/create/'>Add New Author</Link>
        </div>
      </div>
    </div>
  );
};

export default Form;