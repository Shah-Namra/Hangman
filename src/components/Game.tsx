import React, { useCallback, useEffect, useState } from 'react';
import HangmanDrawing from './HangmanDrawing';
import HangmanWord from './HangmanWord';
import Keyboard from './Keyboard';
import words from '../wordsList.json';
import '../index.css'

function getWord(wordList: string[]) {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

const Game: React.FC = () => {
  const [wordToGuess, setWordToGuess] = useState(() => getWord(words));
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wordList, setWordList] = useState(words);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key;
      if (key === "Enter") {
        e.preventDefault();
        setGuessedLetters([]);
        setWordToGuess(getWord(wordList));
      } else if (key.match(/^[a-z]$/)) {
        e.preventDefault();
        addGuessedLetter(key);
      }
    };

    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [addGuessedLetter, wordList]);

  const handleNewGame = () => {
    setGuessedLetters([]);
    setWordToGuess(getWord(wordList));
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-gray-800 font-bold">
        Hangman Game
      </h1>
      <div
        className={`text-2xl font-bold ${isWinner ? 'text-green-500' : isLoser ? 'text-red-500' : 'text-gray-800'}`}
      >
        {isWinner && "Winner! - Refresh to try again"}
        {isLoser && "Nice Try! - Refresh to try again"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <div className="w-full">
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
};

export default Game;
