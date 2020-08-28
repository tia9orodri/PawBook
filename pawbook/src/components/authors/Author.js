import React from 'react';
import {Card, Button, Badge, ListGroup} from 'react-bootstrap';
import niceguy from '../../assets/logoPawBook.png';

class AuthorComponent extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      skills: ['Javascript', 'NodeJS', 'React'],
    };
  }


  render () {
    return (
      <Card style={{width: '13rem'}}>
        <Card.Img variant="top" src={niceguy} />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Subtitle>{this.props.info.cadeira}</Card.Subtitle>
          <Card.Text>
            Email: {this.props.info.email} 
            <br />
            Professor: {this.props.info.professor}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export const Author = AuthorComponent;