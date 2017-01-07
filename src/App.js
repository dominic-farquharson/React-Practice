import React, { Component } from 'react';
import logo from './logo.svg';
import Comment from './Comment';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Comment name="User 1" message="Hello" likes="2"/>
        <Comment name="User 2" message="Hello there" likes="5"/>
      </div>
    );
  }
}

export default App;
