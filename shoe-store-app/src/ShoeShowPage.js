import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';

export default class ShoeShowPage extends Component {

  
  render() {

    return (
      <Container>
         <Row>
          <Col xs="6"><img src={this.props.location.state.shoe.image}></img></Col>
          <Col xs="6">
            <h1>{this.props.location.state.shoe.name}</h1>
            <h3>{this.props.location.state.shoe.brand}</h3>
            <h5>{this.props.location.state.shoe.price}</h5>
            <Col>
            <Button color="primary" size="lg">Add To Cart</Button>
            </Col>
          </Col>
        </Row>
      </Container>
    )
  }
}
