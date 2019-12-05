import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import CartShoeCard from './CartShoeCard';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';

export default class Checkout extends Component {

getTotal = () => {
  let total = 0
  this.props.cartItems.forEach(item => {
    total += item.cost
  })
  return total
}
  render() {
    if (!this.props.token) return <Redirect to='/login' />
    return (
      <div>

        <Container>
          <Row>
            <Col xs="6">
            {this.props.cartItems.map(item => {
              return <CartShoeCard item={item}/>
            })}
            </Col>
            <Col xs="6">
              <div>Total: ${this.getTotal()}</div><br></br>
              <Button color="primary" size="lg">Place Order</Button>
            </Col>
          </Row>
        </Container>
        
      </div>
    )
  }
}
