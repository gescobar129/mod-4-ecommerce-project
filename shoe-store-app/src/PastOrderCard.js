import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

export default class PastOrderCard extends Component {
  render() {
    // debugger
    return (
      <Container className="themed-container" fluid="lg">

        <Row xs="2">
          <Col>
            <div>
              <Card>
                <CardBody>
                  <CardTitle><h3>Order #{this.props.po.id}</h3></CardTitle>
                  <CardSubtitle>Total Cost: {this.props.po.total_cost} </CardSubtitle><br></br>
                  <CardSubtitle>Total Items: {this.props.po.total_items}</CardSubtitle>
                </CardBody>
                <CardBody>
                  <CardText>Shoes Purchased: {this.props.po.shoe_names.map(sn => {
                    return  <li>{sn}</li>})}
                  </CardText>
                </CardBody>
              </Card>
            </div>
          
          </Col>
        </Row>
      </Container>
      
    )
  }
}
