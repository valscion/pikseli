import React, { Component } from 'react';
import EnrollForm from './EnrollForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h2 className='App__heading'>Kisamaatti</h2>
        <EnrollForm />
      </div>
    );
  }
}

export default App;
