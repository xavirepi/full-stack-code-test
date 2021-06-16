// import logo from './logo.svg';
import './App.scss';
import AppRouter from './components/AppRouter';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <main className="App__content">
        <Header/>
        <AppRouter/>
      </main>
    </div>
  );
}

export default App;
