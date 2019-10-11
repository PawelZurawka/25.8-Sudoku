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
      info: ''
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

  check() {
    const solvedBoard = sudoku.solve(this.state.board);
    if (solvedBoard && !this.state.board.includes('.')) {
      alert('Congratulations, Sudoku Solved!');
    } else if (solvedBoard) {
      alert('Everything is going in the right way:)');
    } else {
      alert('Something went wrong:(');
    }
  }

  solveTheGame() {
    const solve = sudoku.solve(this.state.initialBoard);
    if (solve) {
      this.setState({ board: solve });
    }
  }
  componentWillMount() {
    this.startGame();
  }
  render() {
    return (
      <div className={style.app}>
        <h1>Sudoku</h1>
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
