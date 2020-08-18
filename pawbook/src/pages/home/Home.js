import React from 'react';
import logo from '../../assets/logoPawBook.png';
import './Home.css';

export default class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br/>

          <p className="parag">
            <href>
          PawBook - Adopte o seu animal!
            </href>
            <a href='animal/ListAnimals'>PawBook - Adopte o seu animal!</a>
            
          </p>
        </header>
      </div>
    );
  }
}