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
      <tr className='Kisamaatti-Enrollment Kisamaatti-Enrollment--editing'>
        <td colSpan='4'>
          <input
            type='text'
            value={enrollee.raw}
            ref={(node) => {
              if (node) node.focus();
            }}
            onChange={ (evt) => this.props.onChange(evt.target.value) }
            onBlur={ () => this.setState({ isEditing: false }) }
          />
        </td>
      </tr>
    )
  }

  _renderInvalidRow() {
    const enrollee = this.props.enrollee;

    return (
      <tr
        className='Kisamaatti-Enrollment Kisamaatti-Enrollment--invalid'
        onClick={ () => this.setState({ isEditing: true }) }
      >
        <td colSpan='4'>
          {enrollee.raw}
        </td>
      </tr>
    )
  }

  _renderViewRow() {
    const enrollee = this.props.enrollee;

    return (
      <tr
        className='Kisamaatti-Enrollment'
        onClick={ () => this.setState({ isEditing: true }) }
      >
        <td>{enrollee.owner}</td>
        <td>{enrollee.vrl}</td>
        <td>{enrollee.horseName}</td>
        <td>{enrollee.vh}</td>
      </tr>
    )
  }
}

export default Enrollment;
