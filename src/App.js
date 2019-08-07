import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Signup from './components/signup/signup.js';
import Signin from './components/login/signin.js';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <Signup />
      <Signin />
    </div>
    // <div>
    //   <Signin />
    // </div>
  );
}

export default App;
