import React, { Component } from 'react';
import ShoeCard from './ShoeCard';
import { Container, Row, Col } from 'reactstrap';

const shoes = [{
  id: 1,
  name: 'Amina Muaddi',
  size: 9,
  price: 1000,
  image: 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1569929408/605436_HZ510_1000_001_100_0000_Light-Gucci-Zumi-mid-heel-ankle-boot.jpg'
}, {
  id: 2,
  name: 'Jimmy Choo',
  size: 9,
  price: 2000,
  image: 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1569929408/605436_HZ510_1000_001_100_0000_Light-Gucci-Zumi-mid-heel-ankle-boot.jpg'

}, {
  id: 3,
  name: 'Christian Louboutin',
  size: 5,
  price: 5000,
  image: 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1569929408/605436_HZ510_1000_001_100_0000_Light-Gucci-Zumi-mid-heel-ankle-boot.jpg'

}, {
  id: 4,
  name: 'lv',
  size: 9,
  price: 500,
  image: 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1569929408/605436_HZ510_1000_001_100_0000_Light-Gucci-Zumi-mid-heel-ankle-boot.jpg'

}, {
  id: 5,
  name: 'lv',
  size: 6.5,
  price: 1000,
  image: 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1569929408/605436_HZ510_1000_001_100_0000_Light-Gucci-Zumi-mid-heel-ankle-boot.jpg'

}, {
  id: 6,
  name: 'lv',
  size: 7,
  price: 1000,
  image: 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1569929408/605436_HZ510_1000_001_100_0000_Light-Gucci-Zumi-mid-heel-ankle-boot.jpg'

}, {
  id: 7,
  name: 'lv',
  size: 9,
  price: 300,
  image: 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1569929408/605436_HZ510_1000_001_100_0000_Light-Gucci-Zumi-mid-heel-ankle-boot.jpg'

}, {
  id: 7,
  name: 'lv',
  size: 9,
  price: 300,
  image: 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1569929408/605436_HZ510_1000_001_100_0000_Light-Gucci-Zumi-mid-heel-ankle-boot.jpg'
}]

export default class MenIndex extends Component {
  render() {
    return (
      <Container>
        <Row>
          {shoes.map(shoe => {
            return <ShoeCard shoe={shoe}/>
          })}
        </Row>
      </Container>
        
    
    )
  }
}
