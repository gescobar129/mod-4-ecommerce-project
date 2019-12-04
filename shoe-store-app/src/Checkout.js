import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Checkout extends Component {
  render() {
    if (!this.props.token) return <Redirect to='/login' />
    return (
      <div>
        Checkout Page
      </div>
    )
  }
}
