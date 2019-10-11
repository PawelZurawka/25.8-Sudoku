import React from 'react';

const Tile = props => (
  <div>
    <input
      type='number'
      min='1'
      max='9'
      value={props.value}
      onChange={props.onChange}
      className={props.className}
      disabled={props.disabled}
    ></input>
  </div>
);

export default Tile;
