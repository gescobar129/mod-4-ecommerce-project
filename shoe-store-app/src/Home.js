import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import './home_2.jpg';
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div>
       <Row>
        <Col>
          <img className= 'home-image' src ={require('./home_2.jpg')}></img>
        </Col>
        </Row>
      </div>
    )
  }
}
