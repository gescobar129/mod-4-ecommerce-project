import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


export default class CartShoeCard extends Component {
  render() {
    return (
      <div>
        <Card>
        <CardBody>
          <CardTitle>{this.props.item.name}</CardTitle>
          <CardSubtitle>{this.props.item.price}</CardSubtitle>
        </CardBody>
        <img width="25%" src={this.props.item.image} alt="Card image cap" />
      </Card>
      </div>
    )
  }
}
