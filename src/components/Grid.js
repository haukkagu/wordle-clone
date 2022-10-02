import { useState } from 'react'
import './Grid.css'


const GridTile = (props) => {
  return (
    <button className="tile">{props.value}</button>
  );
}

const Grid = (props) => {
  const gridWidth = 5;
  const gridHeight = 7;

  let tiles = [...Array(gridHeight)].map(e => Array(gridWidth));
  for (let y = 0; y < props.guesses.length; y++) {
    let guess = props.guesses[y];
    for (let x = 0; x < guess.length; x++) {
      tiles[y][x] = guess[x];
    }
  }

  for (let x = 0; x < props.currentGuess.length; x++) {
    tiles[props.guesses.length][x] = props.currentGuess[x];
  }

  let rows = [];
  for (let y = 0; y < gridHeight; y++) {
    let row = [];
    for (let x = 0; x < gridWidth; x++) {
      const val = tiles[y][x];
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
