import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import './NavbarComponent.css'

export default class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <Row>
        <Col className='banner'>Free Shipping On Orders Over $50 </Col>
        </Row>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">OG Store</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link to="/"><a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></Link>
            </li>
            <li className="nav-item">
            <Link to="/men-collection"><a className="nav-link" href="#">Men</a></Link>
            </li>
            <li className="nav-item">
            <Link to="/woman-collection"><a className="nav-link" href="#">Woman</a></Link>
            </li>
            <li className="nav-item">
            <Link to="/past-orders"><a className="nav-link" href="#">Past Orders</a></Link>
            </li>
            <li className="nav-item">
            <Link to="/about"><a className="nav-link" href="#">About</a></Link>
            </li>
          </ul>
          <span className="navbar-text">
          { !!this.props.token ? <button className="logout-btn" onClick={ this.props.logOutClick }>Log Out</button> : "" }
          <Link to="/checkout"><img src={require('./cart.png')}></img></Link>
          <h6>{this.props.cartItems.length}</h6>
          </span>
        </div>
      </nav>
    </div>
  );
}
}
