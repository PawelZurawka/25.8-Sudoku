import React from 'react';

const Tile = props => (
  <div>
    <input
      type='number'
      min='1'
      max='9'
      value={props.value}
      onChange={props.onChange}
    ></input>
  </div>
);

export default Tile;
