import React, { Component } from 'react';
import './Enrollment.css';

class Enrollment extends Component {
  render() {
    const enrollee = this.props.enrollee;

    if (enrollee.invalid) {
      return (
        <tr className='Kisamaatti-Enrollment Kisamaatti-Enrollment--invalid'>
          <td colSpan='4'>
            {enrollee.raw}
          </td>
        </tr>
      )
    }

    return (
      <tr className='Kisamaatti-Enrollment'>
        <td>{enrollee.owner}</td>
        <td>{enrollee.vrl}</td>
        <td>{enrollee.horseName}</td>
        <td>{enrollee.vh}</td>
      </tr>
    )
  }
}

export default Enrollment;
