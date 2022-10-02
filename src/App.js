import { useState, useEffect } from 'react';
import Grid from './components/Grid.js';
import './App.css';

const App = () => {
  const [currentGuess, setCurrentGuess] = useState("");

  const handleKeyUp = (e) => {
    const k = e.key;
    const isLetter = (k.length == 1 && k.match(/[a-zA-Z]/));
    const backspacePressed = (k == 'Backspace');

    if (isLetter && currentGuess.length < 5) {
      setCurrentGuess(prev => prev + k.toUpperCase());
    }
    if (backspacePressed && currentGuess.length > 0) {
      setCurrentGuess(prev => prev.slice(0, -1));
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    return () => document.removeEventListener('keyup', handleKeyUp);
  }, [currentGuess]);

  return (
      <div className="App">
        <Grid tiles={[['H','E','L','L','O'], ['W','O','R','L','D'], currentGuess]} />
      </div>
  );
}

export default App;
