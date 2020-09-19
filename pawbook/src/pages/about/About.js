﻿import React from 'react';
import './About.css';
import { Author } from '../../components/authors/Author';
import bernardo from '../../assets/bernardo.png';
import tiago from '../../assets/tiago.jpg';

export default class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <div className="App" id="about-board">
          <h3>Engª. Informática -2019/2020</h3>

          <h2>A Nossa Equipa</h2>
        </div>
        <div className="cartoes" id="about">
          <Author
            name="Tiago Rodrigues"
            info={{ cadeira: 'Tecnologias da Informação 2', email: 'aluno19058@ipt.pt', professor: 'Diogo Mendes', foto:tiago }}
          />
          <Author
            name="Bernardo Alegria"
            info={{ cadeira: 'Tecnologias da Informação 2', email: 'aluno20620@ipt.pt', professor: 'Diogo Mendes', foto:bernardo }}
          />
        </div>
      </div>
    );
  }
}