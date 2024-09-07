// src/InfoPage.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const InfoPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl w-full bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">Hangman Game - Info</h1>
        
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Overview</h2>
          <p className="text-lg leading-relaxed">
            Welcome to the Hangman Game! This classic word-guessing game challenges you to uncover a hidden word by guessing letters. Can you figure out the word before the hangman is fully drawn?
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">How to Play</h2>
          <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
            <li>Guess letters to reveal parts of the hidden word.</li>
            <li>Correct guesses will display the letter in the word.</li>
            <li>Incorrect guesses bring the hangman closer to completion.</li>
            <li>Guess the full word before the hangman is fully drawn to win the game.</li>
          </ul>
        </section>

        

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Follow Me</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition-colors">
              Twitter
            </a>
          </div>
        </section>
        
        <Link
          to="/"
          className="absolute left-1/2 transform -translate-x-1/2 px-6  text-white text-lg font-medium rounded-lg shadow-md hover:text-gray-200 transition-colors"
        >
          Back to Home
        </Link>
        
      </div>
    </div>
  );
};

export default InfoPage;
