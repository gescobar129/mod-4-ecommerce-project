import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import CartShoeCard from './CartShoeCard';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import ThankYou from './ThankYou'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutFrom from './CheckoutForm'

export default class Checkout extends Component {

getTotal = () => {
  let total = 0
  this.props.cartItems.forEach(item => {
    total += item.cost
  })
  return total
}

payForItems = () => {
  fetch("http://localhost:3000/orders/" + this.props.initializedCart.id, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      ...this.props.initializedCart,
      paid: true
    })
  }).then(response => response.json())
  .then(data => {
    // console.log('data', data)
  })

  this.props.clearCartItems()

  fetch("http://localhost:3000/orders", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              paid: false,
              user_id: this.props.loggedInUserId
            })
          }).then(response => response.json())
          .then(data => {
            this.props.getOrder(data)
          })
}

  render() {
    if (!this.props.token) return <Redirect to='/login' />
    return (
      <StripeProvider apiKey="pk_test_8bbC7B605qDELV8i8e3ZuW7U007yMC4TBG">
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
              {/* <Link to="/thankyou"><Button onClick={this.payForItems} color="primary" size="lg">Place Order</Button></Link> */}
              <Elements>
                <CheckoutFrom payForItems={this.payForItems} orderId={this.props.initializedCart.id} />
              </Elements>
            </Col>
          </Row>
        </Container>
        
      </div>
      </StripeProvider>
    )
  }
}
