import React, { Component } from 'react'
import PastOrderCard from './PastOrderCard';

export default class PastOrders extends Component {

  state = {
    paidOrders: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/users/" + this.props.loggedInUserId)
    .then(response => response.json())
    .then(data => {
      // if(data.orders.paid === true) {
        this.setState({
          paidOrders: data.orders.filter(element => element.paid === true)
          
        })
      // }
    })
  }

  render() {

    return (
      <div>
        {this.state.paidOrders.map(po => {
          return <PastOrderCard key = {po.id} po ={po} />
        })}
      </div>
    )
  }
}
