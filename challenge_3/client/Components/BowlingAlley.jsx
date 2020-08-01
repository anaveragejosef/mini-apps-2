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
      frameOne: 0,
      allRounds: []
    }
    this.updateScore = this.updateScore.bind(this);
  }

  updateScore(event) {
    const rounds = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    let totalPins = Number(event.target.value);
    const currRound = rounds[this.state.currentRound];
    if (totalPins === 10 && this.state.currentRoll === 1) {
      // Strike
      this.setState({
        currentRound: this.state.currentRound + 1,
        currentScore: this.state.currentScore + 10,
        allRounds: allRounds.concat([10, 0, 10])
      });
    } else if (totalPins + this.state.hitPins >= 10 && this.state.currentRoll === 2) {
      // Spare
      this.setState({
        currentRound: this.state.currentRound + 1,
        currentScore: this.state.currentScore + 10,
        currentRoll: 1,
        hitPins: 0,
        allRounds: allRounds.concat([this.state.frameOne, (10 - this.state.frameOne), 10])
      });
    } else if (this.state.currentRoll === 2) {
      let prevRound = rounds[this.state.currentRound - 1]
      // Prior round was strike
      if (this.state[prevRound][0] === 10) {
        this.setState({
          [prevRound]: [10, 0, (10 + this.state.FrameOne + totalPins)],
          currentScore: this.state.currentScore + this.state.FrameOne + totalPins
        })
      } else if (this.state[prevRound][2] === 10) { // Prior round was spare
        let spareRound = this.state[prevRound].slice();
        spareRound.splice(2, 1, (this.state.frameOne + 10));
        this.setState({
          [prevRound]: spareRound,
          currentScore: this.state.currentScore + this.state.FrameOne
        })
      }
      this.setState({
        currentRound: this.state.currentRound + 1,
        currentScore: this.state.currentScore + this.state.frameOne + totalPins,
        hitPins: 0,
        currentRoll: 1,
        allRounds: allRounds.concat([this.state.frameOne, totalPins, (this.state.frameOne + totalPins)])
      });
    } else {
      this.setState({
        currentRoll: this.state.currentRoll + 1,
        frameOne: totalPins,
        hitPins: totalPins
      });
    }
  }

  render() {
    return (
      <div style={{display: 'flex'}, {alignItems: 'center'}, {justifyContent: 'center'}}>
        <div>
          <h1>Welcome to Bowling</h1>
        </div>
        <div>
          <p>How many pins did you hit?</p>
          <KeyPad updateScore={this.updateScore} />
        </div>
      </div>
    );
  }
}

export default BowlingAlley
