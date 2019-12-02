import React from 'react';
import Home from './Home';
import Signup from './Signup';
import Checkout from './Checkout';
import WomanIndex from './WomanIndex';
import MenIndex from './MenIndex';
import NavbarComponent from './NavbarComponent'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/men-collection">
            <MenIndex />
          </Route>
          <Route path="/woman-collection">
            <WomanIndex />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}


export default App;
