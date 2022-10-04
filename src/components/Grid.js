import './Grid.css'

const GridTile = (props) => {
  return (
    <button className={`tile tile-${props.color}`}>{props.value}</button>
  );
}

const Grid = (props) => {
  const gridWidth = 5;
  const gridHeight = 7;

  let tiles = [...Array(gridHeight)].map(e => Array(gridWidth).fill(''));
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

    let tmp = new Map();
    for (let x = 0; x < gridWidth; x++) {
      if (tiles[y][x] != props.hiddenWord[x]) {
        if (tmp.get(props.hiddenWord[x])) {
          tmp.set(props.hiddenWord[x], tmp.get(props.hiddenWord[x]) + 1);
        }else {
          tmp.set(props.hiddenWord[x], 1);
        }
      }
    }

    for (let x = 0; x < gridWidth; x++) {
      const val = tiles[y][x];

      let color;
      const inHiddenWord = (tmp.has(val) && tmp.get(val) > 0);
      const inCorrectSpot = (val == props.hiddenWord[x]);
      const inCurrentRow = (y == props.guesses.length);
      const inRemainingRows = (y > props.guesses.length);

      if (inCurrentRow || inRemainingRows) {
        color = "none";
      }else if (inCorrectSpot) {
        color = "green";
      }else if (inHiddenWord) {
        color = "yellow";
        tmp.set(val, tmp.get(val) - 1);
      }else {
        color = "gray";
      }

      row.push(
        <GridTile value={val} color={color} />
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
