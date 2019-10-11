import React from 'react';
import style from './BottomButtons.css';

const BottomButtons = props => {
  <div
    className={style.buttons}
    style={{
      display: this.state.bottomButtonsVisible ? 'block' : 'none'
    }}
  >
    <button onClick={() => props.solve()}>Show solution</button>
    <button onClick={() => props.check()}>Check</button>
    <button onClick={() => props.reset()}>Reset</button>
  </div>;
};

export default BottomButtons;
