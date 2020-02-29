import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Game from './pages/Game';
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Container from './components/Container';
// import Row from './components/Row';
// import PlayerCol from './components/PlayerCol';
// import GameCol from './components/GameCol';
// import InventoryCol from './components/InventoryCol';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/game" component={Game} />
          <Route component={Game} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
