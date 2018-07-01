import React, { Component } from 'react';
import './App.css';
import InputFields from './InputFields/InputFields';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">Phone Formatter</h1>
        </header>
        <p className="App-intro">
          Please enter a phone number and get it in the US format
        </p>
        <InputFields/>
    


      </div>
    );
  }
}

export default App;
