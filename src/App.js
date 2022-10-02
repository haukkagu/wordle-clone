import { useState, useEffect } from 'react';
import Grid from './components/Grid.js';
import './App.css';

const App = () => {
  const hiddenWord = 'HALLO';
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
  }, [currentGuess, guesses]);

  return (
      <div className="App">
        <Grid currentGuess={currentGuess} guesses={guesses} hiddenWord={hiddenWord} />
      </div>
  );
}

export default App;
