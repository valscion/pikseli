import React, { Component } from 'react';
import './Enrollment.css';

class Enrollment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    }
  }

  render() {
    if (this.state.isEditing) {
      return this._renderEditRow();
    }

    if (this.props.enrollee.invalid) {
      return this._renderInvalidRow();
    }

    return this._renderViewRow();
  }

  _renderEditRow() {
    const enrollee = this.props.enrollee;

    return (
      <div className='Kisamaatti-Enrollment Kisamaatti-Enrollment--editing'>
        <div
          className='Kisamaatti-Enrollment__item Kisamaatti-Enrollment__item--full-width'
        >
          <input
            type='text'
            value={enrollee.raw}
            ref={(node) => {
              if (node) node.focus();
            }}
            onChange={ (evt) => this.props.onChange(evt.target.value) }
            onBlur={ () => this.setState({ isEditing: false }) }
          />
        </div>
      </div>
    )
  }

  _renderInvalidRow() {
    const enrollee = this.props.enrollee;

    return (
      <div
        className='Kisamaatti-Enrollment Kisamaatti-Enrollment--invalid'
        onClick={ () => this.setState({ isEditing: true }) }
      >
        <div
          className='Kisamaatti-Enrollment__item Kisamaatti-Enrollment__item--full-width'
        >
          {enrollee.raw}
        </div>
      </div>
    )
  }

  _renderViewRow() {
    const enrollee = this.props.enrollee;

    return (
      <div
        className='Kisamaatti-Enrollment'
        onClick={ () => this.setState({ isEditing: true }) }
      >
        <div className='Kisamaatti-Enrollment__item Kisamaatti-Enrollment__item--owner'>
          {enrollee.owner}
        </div>
        <div className='Kisamaatti-Enrollment__item Kisamaatti-Enrollment__item--vrl'>
          {enrollee.vrl}
        </div>
        <div className='Kisamaatti-Enrollment__item Kisamaatti-Enrollment__item--horseName'>
          {enrollee.horseName}
        </div>
        <div className='Kisamaatti-Enrollment__item Kisamaatti-Enrollment__item--vh'>
          {enrollee.vh}
        </div>
      </div>
    )
  }
}

export default Enrollment;
