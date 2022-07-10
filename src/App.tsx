import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyImage from './components/MyImage';
import Cs from './image/img.jpg';
import CsBad from './image/img_bad.jpg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyImage src={Cs} placeholder={CsBad} width='1920px' height='400px' />
      </header>
    </div>
  );
}

export default App;
