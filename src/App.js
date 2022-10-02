import { useState, useEffect } from 'react';
import Grid from './components/Grid.js';
import './App.css';

const App = () => {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");

  const handleKeyUp = (e) => {
    const k = e.key;
    const isLetter = (k.length == 1 && k.match(/[a-zA-Z]/));
    const removeLast = (k == 'Backspace' || k == 'Delete');
    const submitGuess = (k == 'Enter');

    if (isLetter && currentGuess.length < 5) {
      setCurrentGuess(currentGuess + k.toUpperCase());
    }
    if (removeLast && currentGuess.length > 0) {
      setCurrentGuess(currentGuess.slice(0, -1));
    }
    if (submitGuess && currentGuess.length == 5) {
      setGuesses([...guesses, currentGuess]);
      setCurrentGuess("");
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    return () => document.removeEventListener('keyup', handleKeyUp);
  }, [currentGuess]);

  return (
      <div className="App">
        <Grid tiles={
          [
            ...guesses,
            currentGuess.split('')
          ]}
          width={5}
          height={7}
        />
      </div>
  );
}

export default App;
