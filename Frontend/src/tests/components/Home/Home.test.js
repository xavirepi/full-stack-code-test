import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Authors from '../../../components/Home/Authors';
import Books from '../../../components/Home/Books';
import Forms from '../../../components/Home/Forms';

describe('Home component', () => {
  test('It renders Books, Authors and Forms components', () => {
    const { debug } = render(
      <Router>
        <Authors/>
        <Books/>
        <Forms/>
      </Router>
      );
  
    debug();
  });
  
})