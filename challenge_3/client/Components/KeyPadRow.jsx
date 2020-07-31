import React from 'react';

const KeyPadRow = ({ number, updateScore }) => {
  return (
    <div className='keypad-row'>
      <button value={number} onClick={updateScore}>{number}</button>
    </div>
  )
}

export default KeyPadRow;