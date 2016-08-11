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
    return (
      <div className='Kisamaatti-EnrollForm'>
        <textarea
          className='Kisamaatti-EnrollForm__textarea'
          onChange={ this.handleTextareaChange }
          value={ this.state.input }
        />
        <EnrollmentList data={ this.state.input } />
      </div>
    );
  }

  handleTextareaChange = (event) => {
    const newValue = event.target.value;
    this.setState({ input: newValue });
  }
}

export default EnrollForm;
