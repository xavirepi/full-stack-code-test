import React from 'react';

import { Link } from 'react-router-dom';

import Books from './Books';
import Authors from './Authors';
import Forms from './Forms';

const Home = () => {
  return (
    <div className='Home container'>
      <Books/>
      <Authors/>
      <Forms/>
    </div>
  );
};

export default Home;