import React, { Component } from 'react';
import './App.css';
import Block from './Block/Block';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi there</h1>
        <p>This is really working</p>
        <Block name="MP3 Player" price="120" />
        <Block name="Camera" price="340" />
        <Block name="Computers" price="450" />
        <Block name="Electronics" price="from 1000" >Including TV & Videos</Block>
        <Block name="Phone" price="540" />
        <Block name="Game" price="7600" />
      </div>
    );
  //   return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Compiled text'));
   }
}

export default App;
