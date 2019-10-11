import React from 'react';
import sudoku from 'sudoku-umd';
import Board from '../components/Board';
import TopButtons from '../components/TopButtons';
import style from './App.css';
import { hot } from 'react-hot-loader';
import BottomButtons from '../components/BottomButtons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialBoard: '',
      board: '',
      topButtonsVisible: false,
      bottomButtonsVisible: false
    };
    this.newBoard = this.newBoard.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.lvlChoice = this.lvlChoice.bind(this);
    this.solveTheGame = this.solveTheGame.bind(this);
    this.check = this.check.bind(this);
    this.reset = this.reset.bind(this);
  }

  lvlChoice() {
    this.setState({
      topButtonsVisible: true
    });
  }

  newBoard(level) {
    const randomBoard = sudoku.generate(level);
    this.setState({
      board: randomBoard,
      initialBoard: randomBoard,
      topButtonsVisible: false,
      bottomButtonsVisible: true,
      level
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
        <TopButtons
          show={this.state.topButtonsVisible}
          newGame={this.lvlChoice}
          action={this.newBoard}
          info={this.state.level}
          board={this.state.board.randomBoard}
        />
        <Board
          initialBoard={this.state.initialBoard}
          board={this.state.board}
          handleChange={this.handleChange}
        />
        <BottomButtons
          solve={this.solveTheGame}
          check={this.check}
          reset={this.reset}
          show={this.state.bottomButtonsVisible}
        />
      </div>
    );
  }
}

export default hot(module)(App);
