import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import animalService from '../../services/animal';

export default class AnimalCard extends React.Component {
  constructor(props) {
    super(props);
    this.state={
       txt : props.txt,
       image : props.imagem,
    }
  }

  render() {

    return (
      <div class="card" style={{width: 228}}>
        <img class="card-img-top" src={this.state.imagem} alt="Card image cap"></img>
          <div class="card-body">
          <h5 class="card-title">{this.state.txt}</h5>
            <p class="card-text">Este é o Bobby</p>
            <a href="#" class="btn btn-primary">Adotar</a>
          </div>
      </div>
    )
      
  }
}