import React, { useState } from 'react';
import '../index.css'

interface AddWordPageProps {
  onAddWord: (word: string) => void;
  existingWords: string[];
  successMessage: string;
}

const AddWordPage: React.FC<AddWordPageProps> = ({ onAddWord, existingWords, successMessage }) => {
  const [newWord, setNewWord] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleAddWord = () => {
    if (!newWord.trim()) {
      setError("Word cannot be empty");
      return;
    }
    if (existingWords.includes(newWord.trim())) {
      setError("Word already exists");
      return;
    }
    setError(null);
    onAddWord(newWord.trim());
    alert(successMessage);
    setNewWord("");
  };

  return (
    <div>
      <h1>Add New Word</h1>
      <input
        type="text"
        value={newWord}
        onChange={(e) => setNewWord(e.target.value)}
        placeholder="Enter new word"
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleAddWord}>Add Word</button>
    </div>
  );
};

export default AddWordPage;
