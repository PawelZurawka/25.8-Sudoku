import React from 'react';
import style from './BottomButtons.css';

const BottomButtons = props => {
  if (props.show) {
    return (
      <div className={style.bottomBtnsContainer}>
        <button className={style.btn} onClick={() => props.solve()}>
          See solve
        </button>
        <button className={style.btn} onClick={() => props.check()}>
          Check
        </button>
        <button className={style.btn} onClick={() => props.reset()}>
          Reset
        </button>
      </div>
    );
  } else {
    return '';
  }
};

export default BottomButtons;
