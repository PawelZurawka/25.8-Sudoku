import React from 'react';
import Tile from './Tile';
import style from './Board.css';

const Board = props => {
  const boardSplit = props.board.split('');
  const initialBoardSplit = props.initialBoard.split('');
  const value = boardSplit.map((number, index) => {
    return (
      <Tile
        key={index}
        className={
          number === initialBoardSplit[index] && number != '.'
            ? style.tileInit
            : style.tile
        }
        value={number === '.' ? '' : number}
        disabled={
          number === initialBoardSplit[index] && number != '.' ? true : false
        }
        handleChange={props.handleChange}
        index={index}
      />
    );
  });
};

export default Board;
