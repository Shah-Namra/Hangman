import React from "react";
import Particles from "react-tsparticles";
import { Link } from "react-router-dom";
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const LandingPage: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-gray-800 to-black">
      {/* Particle Background */}
      <Particles
        className="absolute top-0 left-0 w-full h-full"
        options={{
          particles: {
            number: { value: 50 },
            color: { value: "#fff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { enable: true, speed: 2 },
          },
        }}
      />
      {/* Rest of the content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4 md:p-8 bg-black bg-opacity-60 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 md:mb-12 text-white animate-pulse">
          Hangman Game
        </h1>
        <div className="space-y-4 md:space-y-6 mb-6 md:mb-12">
          <Link
            to="/play"
            className="block px-6 py-3 md:px-8 md:py-4 bg-green-600 text-white text-lg md:text-2xl rounded-lg shadow-lg hover:bg-green-700 hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            New Game
          </Link>
          <Link
            to="/settings"
            className="block px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white text-lg md:text-2xl rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            Settings
          </Link>
          <Link
            to="/statistics"
            className="block px-6 py-3 md:px-8 md:py-4 bg-yellow-600 text-white text-lg md:text-2xl rounded-lg shadow-lg hover:bg-yellow-700 hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            Statistics 
          </Link>
          <Link
            to="/add-words"
            className="block px-6 py-3 md:px-8 md:py-4 bg-red-600 text-white text-lg md:text-2xl rounded-lg shadow-lg hover:bg-red-700 hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            Add Your Own Text
          </Link>
        </div>
        <footer className="absolute bottom-4 text-white text-xs md:text-sm">
          <p>&copy; 2024 Hangman Game. All rights reserved.</p>
        </footer>
        <Link
          to="/info"
          className="fixed bottom-4 right-4 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faInfoCircle} size="lg" />
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
