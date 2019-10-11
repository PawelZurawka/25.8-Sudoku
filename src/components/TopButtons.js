import React from 'react';
import style from './TopButtons.css';

const TopButtons = props => {
  if (!props.show) {
    return (
      <button className={style.newGameBtn} onClick={() => props.newGame()}>
        New game
      </button>
    );
  } else {
    return (
      <div className={style.diffBtnsContainer}>
        <p className={style.chooseLvl}>Choose difficulty level</p>
        <button className={style.diffBtn} onClick={() => props.action('easy')}>
          Easy
        </button>
        <button
          className={style.diffBtn}
          onClick={() => props.action('medium')}
        >
          Medium
        </button>
        <button className={style.diffBtn} onClick={() => props.action('hard')}>
          Hard
        </button>
        <button
          className={style.diffBtn}
          onClick={() => props.action('very-hard')}
        >
          Very Hard
        </button>
        <button
          className={style.diffBtn}
          onClick={() => props.action('insane')}
        >
          Insane
        </button>
        <button
          className={style.diffBtn}
          onClick={() => props.action('inhuman')}
        >
          Inhuman
        </button>
      </div>
    );
  }
};

export default TopButtons;
