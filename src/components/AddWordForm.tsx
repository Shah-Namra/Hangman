import React, { useState } from 'react';
import '../index.css';

interface AddWordFormProps {
  onAddWord: (word: string) => void;
  existingWords: string[]; // List of existing words for validation
}

const AddWordForm: React.FC<AddWordFormProps> = ({ onAddWord, existingWords }) => {
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
    setNewWord(""); // Clear input field
  };

  return (
    <div className="flex flex-col gap-6 mt-10 w-full items-center">
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">Add a New Word</h1>
      <p className="text-gray-500 mb-6 text-center w-4/5 max-w-[400px]">
        Enter a unique word that isn't already in the list and click 'Add Word'. Make sure to avoid duplicates.
      </p>
      <input
        className="p-3 border border-gray-300 rounded-lg w-4/5 max-w-[400px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm text-lg"
        type="text"
        value={newWord}
        onChange={(e) => setNewWord(e.target.value)}
        placeholder="Enter new word"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={handleAddWord}
        className="bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300 transform hover:scale-105"
      >
        Add Word
      </button>
    </div>
  );
};

export default AddWordForm;
