import React from 'react';
import style from './Buttons.css';

const TopButtons = props => (
  <div className={style.topButtons}>
    <button className={style.newGame} onClick={() => props.newGame()}>
      New game
    </button>
    {/* <div
      style={{
        display: props.visible ? 'block' : 'none'
      }}
    >
      <button className={style.easyBtn} onClick={dif => props.diff(diff)}>
        Easy
      </button>
      <button className={style.mediumBtn} onClick={diff => props.diff(diff)}>
        Medium
      </button>
      <button className={style.hardBtn} onClick={diff => props.(diff)}>
        Hard
      </button>
    </div> */}
  </div>
);

export default TopButtons;
