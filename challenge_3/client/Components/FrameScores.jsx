import React from 'react';

const FrameScores = ({ roundScores }) => {
  return (
    <div>
      <p>Frame One: {roundScores[0]}</p>
      <p>Frame Two: {roundScores[1]}</p>
      <p>Frame Final: {roundScores[2]}</p>
    </div>
  );
}

export default FrameScores
