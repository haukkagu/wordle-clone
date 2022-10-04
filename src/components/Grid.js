import './Grid.css'

const GridTile = (props) => {
  return (
    <button className={`tile tile-${props.color}`}>{props.value}</button>
  );
}

const Grid = (props) => {
  const gridWidth = 5;
  const gridHeight = 7;

  let rows = [];
  for (const guess of props.guesses) {
    let misplacedLetterCount = {};
    for (let i = 0; i < gridWidth; i++) {
      const guessLetter = guess[i];
      const hiddenWordLetter = props.hiddenWord[i];

      if (guessLetter != hiddenWordLetter) {
        const currentCount = misplacedLetterCount[hiddenWordLetter];
        if (currentCount) {
          misplacedLetterCount[hiddenWordLetter] = currentCount + 1;
        }else {
          misplacedLetterCount[hiddenWordLetter] = 1;
        }
      }
    }

    let row = [];
    for (const i in guess) {
      const guessLetter = guess[i];
      const hiddenWordLetter = props.hiddenWord[i];

      if (guessLetter == hiddenWordLetter) {
        row.push(<GridTile value={guessLetter} color='green' />);
      }else if (misplacedLetterCount[guessLetter] && misplacedLetterCount[guessLetter] > 0) {
        row.push(<GridTile value={guessLetter} color='yellow' />);
        misplacedLetterCount[guessLetter]--;
      }else {
        row.push(<GridTile value={guessLetter} color='gray' />);
      }
    }

    rows.push(row);
  }

  let remainingRows = [...Array(gridHeight - props.guesses.length)].map(e => Array(gridWidth).fill(''));;
  for (let i in props.currentGuess) {
    remainingRows[0][i] = props.currentGuess[i];
  }
  console.log(remainingRows);

  rows.push(...remainingRows.map((row) => {
    return row.map((letter) => {
      return <GridTile value={letter} color='none' />
    });
  }));

  return (
    <div className="grid">
      {
        rows.map((row) => {
          return <div className="grid-row">
            {row}
          </div>
        })
      }
    </div>
  );
}

export default Grid;
