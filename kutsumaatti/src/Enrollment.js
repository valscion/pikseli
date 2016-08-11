import React from 'react';

function Enrollment(props) {
  return (
    <tr>
      <td>{props.owner}</td>
      <td>{props.vrl}</td>
      <td>{props.horseName}</td>
      <td>{props.vh}</td>
    </tr>
  )
}

export default Enrollment;
