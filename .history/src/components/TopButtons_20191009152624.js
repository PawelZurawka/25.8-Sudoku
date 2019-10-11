import React from 'react';
import style from './Buttons.css';

const TopButtons = props => (
  <div className={style.topButtons}>
    <button className={style.newGame} onClick={() => props.newGame()}>
      New game
    </button>
    <button onClick={() => props.action('easy')}>Easy</button>
    <button onClick={() => props.action('medium')}>Medium</button>
    <button onClick={() => props.action('hard')}>Hard</button>
  </div>
);

export default TopButtons;
