import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

export default class ShoeCard extends Component {
  render() {
    return (
      
        <Col xs='3'>
          <Card>
            <CardImg top width="100%" src={this.props.shoe.image} alt="Card image cap" />
            <CardBody>
              <CardTitle>{this.props.shoe.name}</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        
    )
  }
}
