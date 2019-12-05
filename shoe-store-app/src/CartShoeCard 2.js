import React, { Component } from 'react'

export default class CartShoeCard extends Component {
  render() {
    return (
      <div>
        {this.props.item.name}
        <img src={this.props.item.image}></img>
      </div>
    )
  }
}
