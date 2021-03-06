import React from 'react';

const Tile = props => (
  <input
    type='number'
    min='1'
    max='9'
    value={props.value}
    onChange={event => props.handleChange(event.target.value, props.index)}
    className={props.className}
    disabled={props.disabled}
  ></input>
);

export default Tile;
