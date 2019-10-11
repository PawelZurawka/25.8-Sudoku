import React from 'react';
import style from './Buttons.css';

const TopButtons = props => (
  <div className={style.topButtons}>
    <button className={style.newGame} onClick={() => props.newGame()}>
      New game
    </button>
    <div
      style={{
        display: props.visible ? 'block' : 'none'
      }}
    >
      <button onClick={() => props.action('easy')}>Easy</button>
      <button onClick={() => props.action('medium')}>Medium</button>
      <button onClick={() => props.action('hard')}>Hard</button>
    </div>
  </div>
);

export default TopButtons;
