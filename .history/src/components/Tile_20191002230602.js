import React from 'react';

const Tile = props => (
  <div>
    <input
      type='number'
      min='1'
      max='9'
      value={props.value}
      onChange={event => props.handleChange(event.target.value, props.key)}
      className={props.className}
      disabled={props.disabled}
    ></input>
  </div>
);

export default Tile;
