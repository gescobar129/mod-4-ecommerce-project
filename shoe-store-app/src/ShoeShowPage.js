import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';

export default class ShoeShowPage extends Component {

  handleClick = () => {
    this.props.addToCart(this.props.location.state.shoe)
    //this is also going to make a post request to the joiner model when you click add to cart
  }

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
            <Button onClick={this.handleClick} color="primary" size="lg">Add To Cart</Button>
            </Col>
          </Col>
        </Row>
      </Container>
    )
  }
}
