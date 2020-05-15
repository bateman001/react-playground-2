import React from 'react';
import './App.css';
import HelloWorld from './state-drills/HelloWorld';
import RouletteGun from './state-drills/RouletteGun';
import Bomb from './state-drills/Bomb';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <HelloWorld />
      <Bomb />
      <RouletteGun />
    </div>
  );
}

export default App;
