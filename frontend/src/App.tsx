import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Symfoni } from "./hardhat/SymfoniContext";
import { Greeter } from './components/Greeter';
import { Ajuniorcoin } from './components/Ajuniorcoin';
import ajvc from './ajvc.png';


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Symfoni autoInit={true} >
          <img src={ajvc} className="App-logo" alt="logo" />
          <Ajuniorcoin></Ajuniorcoin>
        </Symfoni>
      </header>
    </div>
  );
}

export default App;
