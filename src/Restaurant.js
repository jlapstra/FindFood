import React, { Component } from 'react';
import './Restaurant.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello'};
  }
  render() {
    return (
      <div className="Restaurant" style={{ display: 'inline-block'}}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant= "top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
              {this.props.address}
              {this.props.price}
            </Card.Text>
            <Button variant='primary' href={this.props.info}>More Info</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}


export default Restaurant;
