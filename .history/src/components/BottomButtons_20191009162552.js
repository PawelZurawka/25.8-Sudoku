import React from 'react';
import style from './Buttons.css';

const TopButtons = props => {
  if (!props.show) {
    return (
      <div className={style.topButtons}>
        <button className={style.newGame} onClick={() => props.newGame()}>
          New game
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => props.action('easy')}>Easy</button>
        <button onClick={() => props.action('medium')}>Medium</button>
        <button onClick={() => props.action('hard')}>Hard</button>
        <button onClick={() => props.action('very-hard')}>Very Hard</button>
        <button onClick={() => props.action('insane')}>Insane</button>
        <button onClick={() => props.action('inhuman')}>Inhuman</button>
      </div>
    );
  }
};

export default Bottom;
