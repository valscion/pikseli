import React, { Component } from 'react';
import EnrollmentList from './EnrollmentList';
import './EnrollForm.css';

class EnrollForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  render() {
    const lines = this.state.input.split("\n");

    return (
      <div className='Kisamaatti-EnrollForm'>
        <textarea
          className='Kisamaatti-EnrollForm__textarea'
          onChange={ this.handleTextareaChange }
          value={ this.state.input }
        />
        <EnrollmentList
          lines={ lines }
        />
      </div>
    );
  }

  handleTextareaChange = (event) => {
    const newValue = event.target.value;
    this.setState({ input: newValue });
  }
}

export default EnrollForm;
