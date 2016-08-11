import React, { Component } from 'react';
import ParsedEnrollments from './ParsedEnrollments';
import './EnrollForm.css';

class EnrollForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  render() {
    return (
      <div className='Kisamaatti-EnrollForm'>
        <textarea
          className='Kisamaatti-EnrollForm__textarea'
          onChange={ this.handleTextareaChange }
          value={ this.state.input }
        />
        <ParsedEnrollments data={ this.state.input } />
      </div>
    );
  }

  handleTextareaChange = (event) => {
    const newValue = event.target.value;
    this.setState({ input: newValue });
  }
}

export default EnrollForm;