import React from 'react';
import './App.css';
import "./pages/Home/style.css"
import Navbar from './components/Navbar';
import Game from './pages/Game';
import Home from './pages/Home'
<<<<<<< HEAD
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Characters from './pages/Characters'
=======
import CharSelection from './pages/CharSelection';
>>>>>>> 9e6e47d235ad492870feec9ba60533b9f043b50a
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
<<<<<<< HEAD
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/characters" component={Characters} />
=======
>>>>>>> 9e6e47d235ad492870feec9ba60533b9f043b50a
          <Route exact path="/game" component={Game} />
          <Route exact path="/characters" component={CharSelection} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
