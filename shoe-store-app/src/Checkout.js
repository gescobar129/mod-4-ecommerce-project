import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import CartShoeCard from './CartShoeCard'

export default class Checkout extends Component {
  render() {
    if (!this.props.token) return <Redirect to='/login' />
    return (
      <div>
        {this.props.cartItems.map(item => {
            return <CartShoeCard item={item}/>
          })}
      </div>
    )
  }
}
