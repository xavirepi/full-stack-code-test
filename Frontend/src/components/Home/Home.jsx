import React from 'react';

import { Link } from 'react-router-dom';

import './Home.scss'

import Books from './Books';
import Authors from './Authors';
import Forms from './Forms';

const Home = () => {
  return (
    <div className='Home container'>
      <div className='card-group'>
        <Books/>
        <Authors/>
        <Forms/>
      </div>
    </div>
  );
};

export default Home;