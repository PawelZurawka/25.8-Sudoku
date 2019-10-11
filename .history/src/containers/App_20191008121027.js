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
      board: '',
      buttonsVisible: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  newBoard(level) {
    const randomBoard = sudoku.generate(level);
    this.setState({
      board: randomBoard,
      initialBoard: randomBoard
    });
  }
  // startGame(level) {
  //   const board = sudoku.generate(level);
  //   this.setState({
  //     initialBoard: board,
  //     board,
  //     newGame: false
  //   });
  // }

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

  check() {
    const sudokuSolve = sudoku.solve(this.state.board);
    if (sudokuSolve && !this.state.board.includes('.')) {
      alert('Congratulations, Sudoku solved!');
    } else if (sudokuSolve) {
      alert('Everything is OK:)');
    } else {
      alert('Something went wrong:(');
    }
  }

  solveTheGame() {
    const sudokuSolve = sudoku.solve(this.state.initialBoard);
    if (sudokuSolve) {
      this.setState({ board: sudokuSolve });
    }
  }

  render() {
    return (
      <div className={style.app}>
        <h1>Sudoku</h1>
        <div className={style.ButtonsUp}>
          <button
            className={style.NewGame}
            onClick={() => {
              this.setState({ buttonsVisible: true });
            }}
          >
            New game
          </button>
          <div
            style={{ display: this.state.buttonsVisible ? 'block' : 'none' }}
          >
            <button
              className={style.Easy}
              onClick={() => this.newBoard('easy')}
            >
              Easy
            </button>
            <button
              className={style.Medium}
              onClick={() => this.newBoard('medium')}
            >
              Medium
            </button>
            <button
              className={style.Hard}
              onClick={() => this.newBoard('hard')}
            >
              Hard
            </button>
          </div>
        </div>
        <Board
          initialBoard={this.state.initialBoard}
          board={this.state.board}
          handleChange={this.handleChange}
        />
        <div className={style.buttons}>
          <button onClick={() => this.solveTheGame()}>Show solution</button>
          <button onClick={() => this.check()}>Check</button>
          <button onClick={() => this.reset()}>Reset</button>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
