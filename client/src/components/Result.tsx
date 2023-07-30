// src/components/Result.tsx
import React from 'react';

interface ResultProps {
  word: string;
}

const Result: React.FC<ResultProps> = ({ word }) => {
  return (
    <div>
      <h2>Congratulations!</h2>
      <p>You guessed the word: {word}</p>
    </div>
  );
};

export default Result;
