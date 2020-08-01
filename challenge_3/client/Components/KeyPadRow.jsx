import React from 'react';

const KeyPadRow = ({ number, updateScore }) => {
  return (
    <button value={number} onClick={updateScore}>{number}</button>
  )
}

export default KeyPadRow;