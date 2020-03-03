import React from 'react';
import './App.css';
import "./pages/Home/style.css"
import Navbar from './components/Navbar';
import Game from './pages/Game';
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Characters from './pages/Characters'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/game" component={Game} />
          <Route component={Game} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
