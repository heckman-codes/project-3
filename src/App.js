import React from 'react';
import './App.css';
import "./pages/Home/style.css"
import Navbar from './components/Navbar';
import Game from './pages/Game';
import Home from './pages/Home'
import CharSelection from './pages/CharSelection';
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
          <Route exact path="/" component={Home} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/characters" component={CharSelection} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
