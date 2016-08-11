import React from 'react';
import './EnrollmentList.css';

const START = '^';
const OWNER_BEFORE_VRL = '([^\\(]+) ';
const VRL_ID = '\\((.*)\\) ';
const DASH_BEFORE_HORSE = '(?:-|–|—) '
const HORSE_NAME = '(.*?)'
const VH_ID = ' ?(VH\\d+-\\d+-\\d+)?'
const END = '$';

const matchParts = {
  owner: 1,
  vrl: 2,
  horseName: 3,
  vh: 4
}

const ENROLL_REGEX = new RegExp(
  [
    START,
    OWNER_BEFORE_VRL,
    VRL_ID,
    DASH_BEFORE_HORSE,
    HORSE_NAME,
    VH_ID,
    END
  ].join('')
)

function parseData(data) {
  const lines = data.split("\n").filter(l => l.trim().length > 0);
  return lines.map((line) => {
    const testResult = line.match(ENROLL_REGEX);
    if (!testResult) {
      return {
        owner: null,
        vrl: null,
        horseName: line,
        vh: null
      };
    }

    return {
      owner: testResult[matchParts.owner],
      vrl: testResult[matchParts.vrl],
      horseName: testResult[matchParts.horseName],
      vh: testResult[matchParts.vh]
    }
  });
}

function EnrollmentList(props) {
  const niceData = parseData(props.data);

  return (
    <div className='Kisamaatti-EnrollmentList'>
      {/*<pre>{ENROLL_REGEX.toString()}</pre>
      <pre>{JSON.stringify(parseData(data), null, 2)}</pre>*/}
      <table>
        <thead>
          <tr>
            <th>Omistaja</th>
            <th>VRL</th>
            <th>Hevonen</th>
            <th>VH</th>
          </tr>
        </thead>
        <tbody>
          {niceData.map((enrollee) =>
            <tr key={enrollee.horseName}>
              <td>{enrollee.owner}</td>
              <td>{enrollee.vrl}</td>
              <td>{enrollee.horseName}</td>
              <td>{enrollee.vh}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EnrollmentList;
