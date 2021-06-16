import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <>
    <header className="d-flex flex-md-row align-items-center justify-content-center pb-3 mb-4 border-bottom">
      <Link to="/" className="d-flex align-items-center text-decoration-none">
        <FontAwesomeIcon icon={faHome} size='lg'/>
      </Link>
        {/* <i className="fa fa-home fa-2x mt-3" aria-hidden="true"></i> */}
    </header>
    </>
  );
};

export default Header;