import React from 'react';
import style from './BottomButtons.css';

const BottomButtons = props => {
  <div
    className={style.buttons}
    style={{
      display: this.state.bottomButtonsVisible ? 'block' : 'none'
    }}
  >
    <button onClick={() => this.solveTheGame()}>Show solution</button>
    <button onClick={() => this.check()}>Check</button>
    <button onClick={() => this.reset()}>Reset</button>
  </div>;
};

export default BottomButtons;
