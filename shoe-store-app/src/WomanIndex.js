import React, { Component } from 'react';
import ShoeCard from './ShoeCard';
import { Container, Row, Col } from 'reactstrap';


export default class WomanIndex extends Component {
  state = {
    shoes: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/shoes')
    .then(response => response.json())
    .then(data => {
      this.setState({
        shoes: data.filter(element => element.gender === 'Women')
      })
    })
  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.shoes.map(shoe => {
            return <ShoeCard key={shoe.id} shoe={shoe}/>
          })}
        </Row>
      </Container>
        
    
    )
  }
}
