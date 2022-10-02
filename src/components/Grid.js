import { useState } from 'react'
import './Grid.css'


const GridTile = (props) => {
  return (
    <button className="tile">{props.value}</button>
  );
}

const Grid = (props) => {
  const tiles = props.tiles;

  const gridWidth = props.width || tiles[0].length;
  const gridHeight = props.height || tiles.length;

  let rows = [];
  for (let y = 0; y < gridHeight; y++) {
    let row = [];
    for (let x = 0; x < gridWidth; x++) {
      row.push(
        <GridTile value={(y < tiles.length && x < tiles[0].length) ? tiles[y][x] : ''} />
      );
    }

    rows.push(
      <div className="grid-row">
        {row}
      </div>
    );
  }

  return (
    <div className="grid">
      {rows}
    </div>
  );
}

export default Grid;
