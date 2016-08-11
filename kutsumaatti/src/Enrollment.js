import React from 'react';

function Enrollment(props) {
  const enrollee = props.enrollee;

  return (
    <tr>
      <td>{enrollee.owner}</td>
      <td>{enrollee.vrl}</td>
      <td>{enrollee.horseName}</td>
      <td>{enrollee.vh}</td>
    </tr>
  )
}

export default Enrollment;
