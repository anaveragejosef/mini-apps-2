import React from 'react';
import KeyPad from './KeyPad.jsx';

class BowlingAlley extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRound: 1,
      currentRoll: 1,
      currentScore: 0,
      hitPins: 0,
    }
    this.updateScore = this.updateScore.bind(this);
  }

  updateScore(event) {
    // Num of pins = event.target.value
    // Increment score by that amount
    // Increment hit pins by that amount
      // If hit pins === 10 && roll === 1
        // Strike
        // Increment round
        // return
      // if hit pins >= 10 && roll === 2
        // Spare
    // If roll + 1 > 2
      // Round over, increment current round by 1
      // Reset roll to 1
    // Else
      // Increment roll to 2
  }

  render() {
    return (
      <div style={{display: 'flex'}, {justifyContent: 'center'}, {alignItems: 'center'}}>
        <KeyPad updateScore={this.updateScore} />
      </div>
    );
  }
}

export default BowlingAlley
