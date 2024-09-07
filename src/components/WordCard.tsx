import React from 'react';
import '../index.css'
interface WordCardProps {
  word: string;
}

const WordCard: React.FC<WordCardProps> = ({ word }) => (
  <div
    style={{
      padding: "1rem",
      border: "1px solid #ddd",
      borderRadius: "4px",
      marginBottom: "1rem",
      backgroundColor: "#fff",
    }}
  >
    {word}
  </div>
);

export default WordCard;
