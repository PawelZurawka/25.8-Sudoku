import React from 'react';
import style from './BottomButtons.css';

const BottomButtons = props => {
  if (props.show) {
    return (
      <div className={style.bottomButtons}>
        <button onClick={() => props.solve()}>Show solution</button>
        <button onClick={() => props.check()}>Check</button>
        <button onClick={() => props.reset()}>Reset</button>
      </div>
    );
  } else {
    return '';
  }
};

export default BottomButtons;
