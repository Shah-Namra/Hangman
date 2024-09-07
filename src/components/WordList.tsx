import React from 'react';
import WordCard from './WordCard';
import '../index.css'

interface WordListProps {
  words: string[];
}

const WordList: React.FC<WordListProps> = ({ words }) => (
  <div>
    {words.map((word, index) => (
      <WordCard key={index} word={word} />
    ))}
  </div>
);

export default WordList;
