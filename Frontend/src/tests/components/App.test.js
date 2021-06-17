import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '../../components/AppRouter';
import Header from '../../components/Header'

describe('App component', () => {
  test('It renders Header and AppRouter components', () => {
    const { debug } = render(
      <Router>
        <Header/>
        <AppRouter />
      </Router>
      );

    debug();
  });

})

