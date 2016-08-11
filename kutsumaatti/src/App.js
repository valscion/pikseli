import React, { Component } from 'react';
import EnrollForm from './EnrollForm';
import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='Kisamaatti'>
        <h2 className='Kisamaatti__heading'>Kisamaatti</h2>
        <EnrollForm />
      </div>
    );
  }
}

export default App;
