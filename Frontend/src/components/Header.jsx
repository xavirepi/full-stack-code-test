import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="d-flex flex-column flex-md-row align-items-center justify-content-center pb-3 mb-4 border-bottom">
      <Link to="/" className="d-flex align-items-center text-white text-decoration-none">
        <i className="fas fa-home fa-2x mt-3" aria-hidden="true"></i>
        Home
      </Link>
    </header>
  );
};

export default Header;