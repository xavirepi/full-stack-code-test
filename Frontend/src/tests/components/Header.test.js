import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from '../../components/Header';

describe('Header component', () => {
  test('It renders a Header Component', () => {
    const { debug } = render(<Router><Header /></Router>)
  
    debug()
  });
  
})