import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="App-footer text-white bg-secondary mt-3 p-3">
          <small>
            Full Stack Test developed by <a className="App-link" 
              href='https://www.linkedin.com/in/javier-repilado-frontend-developer/'
              target='_blank' rel='noreferrer'>
              Javier Repilado</a>. 
            You can check out my portfolio on <a className="App-link" 
              href='https://github.com/xavirepi'
              target='_blank' rel='noreferrer'>
              my Github Profile Page
            </a>.
          </small>
        </footer>
    </div>
  );
};

export default Footer;