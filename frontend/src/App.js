import logo from './logo.svg';
import './App.css';
import React, { useEffect } from "react";
import axios from "./axiosinstance";

function App() {
  useEffect(() => {
    axios.get("/test").then((data) => {
      console.log("ktu i kena disa te dhena : ", data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
