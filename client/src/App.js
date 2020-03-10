import React from 'react';
import './App.css';
import "./pages/Home/style.css"
import Navbar from './components/Navbar';
import Game from './pages/Game';
import Home from './pages/Home'
import CharSelection from './pages/CharSelection';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './pages/About';
import Credits from './pages/Credits';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/about" component={About} />
          <Route exact path="/credits" component={Credits} />
          <Route exact path="/characters" component={CharSelection} />

          {/* GET/POST Routes?? */}
          <Route path="/posts/:login" component={Home} />
          <Route path="/posts/:signup" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
