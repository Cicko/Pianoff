import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./app/containers";

function App() {
  return (
    <div className="App">
      <Header activeItem="home"/>
    </div>
  );
}

export default App;
