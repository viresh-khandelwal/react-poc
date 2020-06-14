import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet' ;
import Flirt from './components/Flirt' ;
import Hello from './components/Hello' ;

function App() {
  return (
    <div className="App">
      <Greet/>
      <Flirt/>
      <Hello/>
    </div>
  );
}

export default App;
