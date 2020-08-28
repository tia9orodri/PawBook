﻿import React from 'react';
import './About.css';
import {Author} from '../../components/authors/Author';

export default class AboutPage extends React.Component {
  render () {
    return (
      <div className="App" id="about-board">
        <h3>A Nossa Equipa</h3>
        <Author
          name="Tiago Rodrigues"
          info={{cadeira: 'Tecnologias da Informação 2', email: 'aluno19058@ipt.pt', professor:'Diogo Mendes'}}
        />
      </div>
    );
  }
}