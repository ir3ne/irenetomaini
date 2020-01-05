import React from 'react';
// import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="Name">Irene Tomaini</div>
      <div className="Text">
      Irene Tomaini is a Front-end developer specializing in UI, CSS, accessibility.
      <br />
      Scss enthusiast.
      <br />
      She works remotely from Italy.
      </div>
      <div className="Contacts">
        <div className="Contacts-link">
          <a href="https://www.linkedin.com/in/irenetomaini/">Linkedin</a>
        </div>
        <div className="Contacts-link">
          <a href="https://github.com/ir3ne">Github</a>
        </div>
        <div className="Contacts-link">
          <a href="https://twitter.com/irenetomaini1">Twitter</a>
        </div>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
