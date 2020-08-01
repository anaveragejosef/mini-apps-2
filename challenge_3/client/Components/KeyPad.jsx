import React from 'react';
import KeyPadRow from './KeyPadRow.jsx';

const KeyPad = ({ updateScore }) => {
  return (
    <div style={{flexDirection: 'column'}}>
      <div style={{flexDirection: 'row'}}>
        {[0, 1, 2].map(num => <KeyPadRow number={num} updateScore={(event) => updateScore(event)} key={num} />)}
      </div>
      <div style={{flexDirection: 'row'}}>
        {[3, 4, 5].map(num => <KeyPadRow number={num} updateScore={(event) => updateScore(event)} key={num} />)}
      </div>
      <div style={{flexDirection: 'row'}}>
        {[6, 7, 8].map(num => <KeyPadRow number={num} updateScore={(event) => updateScore(event)} key={num} />)}
      </div>
      <div style={{flexDirection: 'row'}}>
        {[9, 10].map(num => <KeyPadRow number={num} updateScore={(event) => updateScore(event)} key={num} />)}
      </div>
    </div>
  )
}

export default KeyPad
