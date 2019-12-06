import React, { Component } from 'react'

export default class PastOrderCard extends Component {
  render() {
    // debugger
    return (
      <div>
        <h1>Total Cost: {this.props.po.total_cost}</h1>
        <h1>Total Items: {this.props.po.total_items}</h1>
        {this.props.po.shoe_names.map(sn => {
          return  <h4>{sn}</h4>
        })}
       
      </div>
    )
  }
}
