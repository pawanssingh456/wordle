// src/components/Game.tsx
import React, { useState, useEffect } from 'react';

const Game: React.FC = () => {
  const [word, setWord] = useState<string>('');
  const [attempts, setAttempts] = useState<number>(0);
  const [guessedWords, setGuessedWords] = useState<string[]>([]);

  // Fetch a new word from the backend and set the state on component mount
  useEffect(() => {
    fetchNewWord();
  }, []);

  const fetchNewWord = async () => {
    try {
      const response = await fetch('/api/games/create');
      const data = await response.json();
      setWord(data.word);
      setAttempts(data.attempts);
      setGuessedWords([]);
    } catch (error) {
      console.error('Error fetching new word:', error.message);
    }
  };

  const handleGuess = (guess: string) => {
    // Handle user's guess logic here
    // ...
    // Update the guessedWords state with the user's guess
    setGuessedWords((prevGuessedWords) => [...prevGuessedWords, guess]);
    // Decrement the attempts remaining
    setAttempts((prevAttempts) => prevAttempts - 1);
  };

  return (
    <div>
      {/* Render the game UI here */}
      <h2>Word: {word}</h2>
      <h3>Attempts remaining: {attempts}</h3>
      <div>
        <h3>Guessed Words:</h3>
        <ul>
          {guessedWords.map((guess, index) => (
            <li key={index}>{guess}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Game;
