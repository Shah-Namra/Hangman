// import React, { useCallback, useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import HangmanDrwaing from './HangmanDrawing';
// import HangmanWord from './HangmanWord';
// import KeyWord from './Keyboard';
// import AddWordForm from './components/AddWordForm';
// import words from './wordsList.json';

// function getWord(wordList: string[]) {
//   return wordList[Math.floor(Math.random() * wordList.length)];
// }

// function App() {
//   const [wordToGuess, setWordToGuess] = useState(() => getWord(words));
//   const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
//   const [wordList, setWordList] = useState(words);

//   const incorrectLetters = guessedLetters.filter(
//     (letter) => !wordToGuess.includes(letter)
//   );
//   const isLoser = incorrectLetters.length >= 6;
//   const isWinner = wordToGuess
//     .split("")
//     .every((letter) => guessedLetters.includes(letter));

//   const addGuessedLetter = useCallback(
//     (letter: string) => {
//       if (guessedLetters.includes(letter) || isLoser || isWinner) return;
//       setGuessedLetters((currentLetters) => [...currentLetters, letter]);
//     },
//     [guessedLetters, isLoser, isWinner]
//   );

//   useEffect(() => {
//     const handleKeyPress = (e: KeyboardEvent) => {
//       const key = e.key;
//       if (key === "Enter") {
//         e.preventDefault();
//         setGuessedLetters([]);
//         setWordToGuess(getWord(wordList));
//       } else if (key.match(/^[a-z]$/)) {
//         e.preventDefault();
//         addGuessedLetter(key);
//       }
//     };
  
//     document.addEventListener("keypress", handleKeyPress);
//     return () => {
//       document.removeEventListener("keypress", handleKeyPress);
//     };
//   }, [addGuessedLetter, wordList]);

//   const handleNewGame = () => {
//     setGuessedLetters([]);
//     setWordToGuess(getWord(wordList));
//   };

//   const handleAddWord = (word: string) => {
//     setWordList((currentList) => [...currentList, word]);
//     alert('Word added successfully!');
//   };

//   return (
//     <Router>
//       <div
//         style={{
//           maxWidth: "800px",
//           display: "flex",
//           flexDirection: "column",
//           gap: "2rem",
//           margin: "0 auto",
//           alignItems: "center",
//           backgroundColor: "#f4f4f9",
//           padding: "2rem",
//           borderRadius: "8px",
//           boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <nav
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             width: "100%",
//             padding: "1rem",
//             backgroundColor: "#333",
//             color: "#fff",
//             borderRadius: "8px",
//           }}
//         >
//           <Link to="/" style={{ color: "white", textDecoration: "none" }}>
//             <img
//               src="path/to/logo.png" // Replace with your logo path
//               alt="Logo"
//               style={{ height: "40px", width: "auto" }}
//             />
//           </Link>
//           <Link
//             to="/"
//             style={{
//               color: "white",
//               textDecoration: "none",
//               padding: "10px 20px",
//               borderRadius: "4px",
//               backgroundColor: "#4CAF50",
//             }}
//           >
//             Let's Play!
//           </Link>
//           <Link
//             to="/add-words"
//             style={{
//               color: "white",
//               textDecoration: "none",
//               padding: "10px 20px",
//               borderRadius: "4px",
//               backgroundColor: "#f44336",
//             }}
//           >
//             Add Words
//           </Link>
//         </nav>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <h1 style={{ fontSize: "3rem", textAlign: "center", color: "#333" }}>
//                   Hangman Game
//                 </h1>
//                 <div
//                   style={{
//                     fontSize: "1.5rem",
//                     textAlign: "center",
//                     color: isWinner ? "green" : isLoser ? "red" : "#333",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   {isWinner && "Winner! - Refresh to try again"}
//                   {isLoser && "Nice Try! - Refresh to try again"}
//                 </div>
//                 <HangmanDrwaing numberOfGuesses={incorrectLetters.length} />
//                 <HangmanWord
//                   reveal={isLoser}
//                   guessedLetters={guessedLetters}
//                   wordToGuess={wordToGuess}
//                 />
//                 <div style={{ alignSelf: "stretch" }}>
//                   <KeyWord
//                     disabled={isWinner || isLoser}
//                     activeLetters={guessedLetters.filter((letter) =>
//                       wordToGuess.includes(letter)
//                     )}
//                     inactiveLetters={incorrectLetters}
//                     addGuessedLetter={addGuessedLetter}
//                   />
//                 </div>
//               </>
//             }
//           />
//           <Route
//             path="/add-words"
//             element={<AddWordForm onAddWord={handleAddWord} existingWords={wordList} />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// Added a lot of things i dont rememer

  // import React, { useCallback, useEffect, useState } from 'react';
  // import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
  // import HangmanDrawing from './components/HangmanDrawing';
  // import HangmanWord from './components/HangmanWord';
  // import KeyWord from './components/Keyboard';
  // import AddWordForm from './components/AddWordForm';
  // import LandingPage from './components/LandingPage'; // Import LandingPage
  // import words from './wordsList.json';


  // function getWord(wordList: string[]) {
  //   return wordList[Math.floor(Math.random() * wordList.length)];
  // }

  // const App: React.FC = () => {
  //   const [wordToGuess, setWordToGuess] = useState(() => getWord(words));
  //   const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  //   const [wordList, setWordList] = useState(words);

  //   const incorrectLetters = guessedLetters.filter(
  //     (letter) => !wordToGuess.includes(letter)
  //   );
  //   const isLoser = incorrectLetters.length >= 6;
  //   const isWinner = wordToGuess
  //     .split("")
  //     .every((letter) => guessedLetters.includes(letter));

  //   const addGuessedLetter = useCallback(
  //     (letter: string) => {
  //       if (guessedLetters.includes(letter) || isLoser || isWinner) return;
  //       setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  //     },
  //     [guessedLetters, isLoser, isWinner]
  //   );

  //   useEffect(() => {
  //     const handleKeyPress = (e: KeyboardEvent) => {
  //       const key = e.key;
  //       if (key === "Enter") {
  //         e.preventDefault();
  //         setGuessedLetters([]);
  //         setWordToGuess(getWord(wordList));
  //       } else if (key.match(/^[a-z]$/)) {
  //         e.preventDefault();
  //         addGuessedLetter(key);
  //       }
  //     };

  //     document.addEventListener("keypress", handleKeyPress);
  //     return () => {
  //       document.removeEventListener("keypress", handleKeyPress);
  //     };
  //   }, [addGuessedLetter, wordList]);

  //   const handleNewGame = () => {
  //     setGuessedLetters([]);
  //     setWordToGuess(getWord(wordList));
  //   };

  //   const handleAddWord = (word: string) => {
  //     setWordList((currentList) => [...currentList, word]);
  //     alert('Word added successfully!');
  //   };

  //   return (
  //     <Router>
  //       <div
  //       className='w-1/3 max-w-800 flex flex-col gap-8 mx-auto items-center bg-gray-100 p-8 rounded-lg shadow-lg '
  //         // style={{
  //         //   maxWidth: '800px',
  //         //   display: 'flex',
  //         //   flexDirection: 'column',
  //         //   gap: '2rem',
  //         //   margin: '0 auto',
  //         //   alignItems: 'center',
  //         //   backgroundColor: '#f4f4f9',
  //         //   padding: '2rem',
  //         //   borderRadius: '8px',
  //         //   boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  //         // }}
  //       >
  //         <nav
  //         className='flex justify-between items-center w-full p-4 bg-gray-800 text-white rounded-lg'
  //           // style={{
  //           //   display: 'flex',
  //           //   justifyContent: 'space-between',
  //           //   alignItems: 'center',
  //           //   width: '100%',
  //           //   padding: '1rem',
  //           //   backgroundColor: '#333',
  //           //   color: '#fff',
  //           //   borderRadius: '8px',
  //           // }}
  //         >
  //           <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
  //             <img
  //               src="path/to/logo.png" // Replace with your logo path
  //               alt="Logo"
  //               // style={{ height: '40px', width: 'auto' }}
  //               className="h-[40px] w-auto" 
  //             />
  //           </Link>
  //           <Link
  //             to="/play"
  //             // style={{
  //             //   color: 'white',
  //             //   textDecoration: 'none',
  //             //   padding: '10px 20px',
  //             //   borderRadius: '4px',
  //             //   backgroundColor: '#4CAF50',
  //             // }}
  //           className='text-white no-underline py-2.5 px-5 rounded-sm bg-[#4CAF50]'
            
  //           >
  //             Let's Play!
  //           </Link>
  //           <Link
  //             to="/add-words"
  //             className='text-white no-underline py-2.5 px-5 rounded-sm bg-[#f44336]'
  //             //  style={{
  //             //    color: 'white',
  //             //    textDecoration: 'none',
  //             //    padding: '10px 20px',
  //             //    borderRadius: '4px',
  //             //    backgroundColor: '#f44336',
  //             //  }}
  //           >
  //             Add Words
  //           </Link>
  //         </nav>
  //         <Routes>
  //           <Route path="/" element={<LandingPage />} /> {/* Landing Page */}
  //           <Route
  //             path="/play"
  //             element={
  //               <>
  //                 <h1 
  //                 className="text-6xl text-center text-[#333]"
  //                 //style={{ fontSize: '3rem', textAlign: 'center', color: '#333' }}
                  
  //                 >
  //                   Hangman Game
  //                 </h1>
  //                 <div
  //                 className={`text-xl text-center font-bold ${isWinner ? 'text-green-500' : isLoser ? 'text-red-500' : 'text-[#333]'}`}
  //                   // style={{
  //                   //   fontSize: '1.5rem',
  //                   //   textAlign: 'center',
  //                   //   color: isWinner ? 'green' : isLoser ? 'red' : '#333',
  //                   //   fontWeight: 'bold',
  //                   // }}
  //                 >
  //                   {isWinner && (
  //                     <div>
  //                       Winner! <button onClick={handleNewGame}>Play Again</button>
  //                     </div>
  //                   )}
  //                   {isLoser && (
  //                     <div>
  //                       Nice Try! <button onClick={handleNewGame}>Try Again</button>
  //                     </div>
  //                   )}
  //                 </div>
  //                 <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
  //                 <HangmanWord
  //                   reveal={isLoser}
  //                   guessedLetters={guessedLetters}
  //                   wordToGuess={wordToGuess}
  //                 />
  //                 <div 
  //                 className='self-stretch'
  //                 //style={{ alignSelf: 'stretch' }}
  //                 >
  //                   <KeyWord
  //                     disabled={isWinner || isLoser}
  //                     activeLetters={guessedLetters.filter((letter) =>
  //                       wordToGuess.includes(letter)
  //                     )}
  //                     inactiveLetters={incorrectLetters}
  //                     addGuessedLetter={addGuessedLetter}
  //                   />
  //                 </div>
  //               </>
  //             }
  //           />
  //           <Route
  //             path="/add-words"
  //             element={<AddWordForm onAddWord={handleAddWord} existingWords={wordList} />}
  //           />
  //           <Route path="/stats" element={<h2>Statistics Page - Coming Soon!</h2>} />
  //         </Routes>
  //       </div>
  //     </Router>
  //   );
  // }

  // export default App;

  // trying to make the pafe responsive
  import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import KeyWord from './components/Keyboard';
import AddWordForm from './components/AddWordForm';
import LandingPage from './components/LandingPage'; 
import words from './wordsList.json';
import InfoPage from './components/InfoPage';
import Statistics from './components/Stats';

function getWord(wordList: string[]) {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

const App: React.FC = () => {
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

  const handleAddWord = (word: string) => {
    setWordList((currentList) => [...currentList, word]);
    alert('Word added successfully!');
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100 ">
        {/* Header */}
        <header className="bg-gray-800 text-white">
          <nav className="flex justify-between items-center p-4 md:px-8 lg:px-16">
            <Link to="/" className="flex items-center">
              <img
                src="path/to/logo.png" 
                alt="Logo"
                className="h-10 w-auto"
              />
            </Link>
            <div className="space-x-4">
              <Link
                to="/play"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
              >
                Let's Play!
              </Link>
              <Link
                to="/add-words"
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
              >
                Add Words
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow p-4 md:p-8">
          <div className="w-full md:w-1/3 mx-auto bg-white p-6 rounded-lg shadow-lg">
            <Routes>
              <Route path="/" element={<LandingPage />} /> 
              <Route
                path="/play"
                element={
                  <>
                    <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-8">
                      Hangman Game
                    </h1>
                    <div
                      className={`text-xl text-center font-bold mb-8 ${
                        isWinner ? 'text-green-500' : isLoser ? 'text-red-500' : 'text-gray-800'
                      }`}
                    >
                      {isWinner && (
                        <div>
                          Winner!{' '}
                          <button
                            onClick={handleNewGame}
                            className="text-blue-500 underline"
                          >
                            Play Again
                          </button>
                        </div>
                      )}
                      {isLoser && (
                        <div>
                          Nice Try!{' '}
                          <button
                            onClick={handleNewGame}
                            className="text-blue-500 underline"
                          >
                            Try Again
                          </button>
                        </div>
                      )}
                    </div>
                    <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
                    <HangmanWord
                      reveal={isLoser}
                      guessedLetters={guessedLetters}
                      wordToGuess={wordToGuess}
                    />
                    <div className="mt-8">
                      <KeyWord
                        disabled={isWinner || isLoser}
                        activeLetters={guessedLetters.filter((letter) =>
                          wordToGuess.includes(letter)
                        )}
                        inactiveLetters={incorrectLetters}
                        addGuessedLetter={addGuessedLetter}
                      />
                    </div>
                  </>
                }
              />
              <Route
                path="/add-words"
                element={<AddWordForm onAddWord={handleAddWord} existingWords={wordList} />}
              />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/settings" element={<h2>Settings Page - Coming Soon!</h2>} />
              <Route path="/info" element={<InfoPage />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-4">
          <p>&copy; 2024 Hangman Game. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
