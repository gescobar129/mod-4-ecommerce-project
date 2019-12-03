import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import {
  BrowserRouter as Router,
  Link,
  NavLink
} from "react-router-dom";

export default class ShoeCard extends Component {
  render() {
    return (
      
        <Col xs='3'>
          <Link to={{pathname: "/shoe-show-page", state: {shoe: this.props.shoe}}} >
            <Card>
              <CardImg top width="100%" src={this.props.shoe.image} alt="Card image cap" />
              <CardBody className='shoe-card-body'>
                <CardTitle>{this.props.shoe.name}</CardTitle>
                <CardText>{this.props.shoe.price}</CardText>
              </CardBody>
            </Card>
          </Link>
        </Col>
        
    )
  }
}

