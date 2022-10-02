import { useState } from 'react'
import './Grid.css'


const GridTile = (props) => {
  return (
    <button className="tile">{props.value}</button>
  );
}

const Grid = (props) => {
  const tiles = props.tiles;

  if (tiles.length == 0) {
    return;
  }
  const tileWidth = tiles[0].length;
  const tileHeight = tiles.length;

  let rows = [];
  for (let y = 0; y < tileHeight; y++) {
    let row = [];
    for (let x = 0; x < tileWidth; x++) {
      row.push(
        <GridTile value={tiles[y][x]} />
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
