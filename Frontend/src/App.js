// import logo from './logo.svg';
import './App.scss';

import Authors from './views/Authors/Authors.jsx';
import Books from './views/Books/Books.jsx';

function App() {
  return (
    <div className="App">
      {/* <header className="App__header">
        <img src={logo} className="App__logo" alt="logo" />
        <p>
          Soamee Test
        </p>
        <a
          className="App__link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <main className="App__content">
        {/* <Authors/> */}
        <Books/>
      </main>
    </div>
  );
}

export default App;
