import React from 'react';
import style from './Buttons.css';

const TopButtons = props => {
  <div className={style.ButtonsUp}>
    <button
      className={style.NewGame}
      onClick={() => {
        this.setState({ topButtonsVisible: true });
      }}
    >
      New game
    </button>
    <div
      style={{
        display: this.state.topButtonsVisible ? 'block' : 'none'
      }}
    >
      <button className={style.Easy} onClick={() => this.newBoard('easy')}>
        Easy
      </button>
      <button className={style.Medium} onClick={() => this.newBoard('medium')}>
        Medium
      </button>
      <button className={style.Hard} onClick={() => this.newBoard('hard')}>
        Hard
      </button>
    </div>
  </div>;
};

export default TopButtons;
