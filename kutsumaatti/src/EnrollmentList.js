import React from 'react';
import Enrollment from './Enrollment';
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

function parseData(lines) {
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

function onlyOneBlankLine(array) {
  return array.length === 1 && array[0] === ''
}

function EnrollmentList(props) {
  const niceData = onlyOneBlankLine(props.lines) ? [] : parseData(props.lines);

  return (
    <div className='Kisamaatti-EnrollmentList'>
      {/* Poista alta kommenttimerkit ja näet käytetin regexin */}
      {/*<pre>{ENROLL_REGEX.toString()}</pre>*/}
      {/* Poista alta kommenttimerkit ja näet regexin raakadatan */}
      {/*<pre>{JSON.stringify(niceData, null, 2)}</pre>*/}
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
          {niceData.map((enrollee, rowNumber) =>
            <Enrollment
              key={rowNumber}
              owner={enrollee.owner}
              vrl={enrollee.vrl}
              horseName={enrollee.horseName}
              vh={enrollee.vh}
            />
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EnrollmentList;
