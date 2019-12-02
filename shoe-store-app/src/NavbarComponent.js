import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default class NavbarComponent extends Component {
  render() {
    return (
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Shoe Store</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <Link to="/"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></Link>
            </li>
            <li class="nav-item">
            <Link to="/men-collection"><a class="nav-link" href="#">Men</a></Link>
            </li>
            <li class="nav-item">
            <Link to="/woman-collection"><a class="nav-link" href="#">Woman</a></Link>
            </li>
            <li class="nav-item">
            <Link to="/about"><a class="nav-link" href="#">About</a></Link>
            </li>
          </ul>
          <span class="navbar-text">
          <Link to="/checkout"><img src={require('./cart.png')}></img></Link>
          <Link to="/signup"><img src={require('./user.png')}></img></Link>
          </span>
        </div>
      </nav>
    </div>
  );
}
}
