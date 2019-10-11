import React from 'react';
import sudoku from 'sudoku-umd';
import Board from '../components/Board';
import style from './App.css';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialBoard: '',
      board: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  startGame(level) {
    const board = sudoku.generate(level);
    this.setState({
      initialBoard: board,
      board
    });
  }

  reset() {
    this.setState({ board: this.state.initialBoard });
  }

  handleChange(value, index) {
    if (value > 0 && value <= 9) {
      let newBoard = this.state.board.split('').map((val, i) => {
        if (i == index) {
          return Number(value);
        }
        return val;
      });
      this.setState({ board: newBoard.join('') });
    } else if (value === '') {
      let newBoard = this.state.board.split('').map((val, i) => {
        if (i == index) {
          return '.';
        }
        return val;
      });
      this.setState({ board: newBoard.join('') });
    }
  }

  render() {
    return (
      <div className={style.app}>
        <h1>Sudoku</h1>
        <Board />
        <div className='buttons'>
          <button>Check</button>
          <button>New Game</button>
          <button>Solve</button>
          <button>Restart</button>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
