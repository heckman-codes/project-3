import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Container from './components/Container';
import Row from './components/Row';
import PlayerCol from './components/PlayerCol';
import GameCol from './components/GameCol';
import InventoryCol from './components/InventoryCol';

function App() {
  return (
    <div>
      <Navbar />
      <Row>
        <PlayerCol />
        <GameCol />
        <InventoryCol />
      </Row>
    </div>
  );
}

export default App;
