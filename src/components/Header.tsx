import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <nav className="flex justify-between items-center w-full p-4 bg-gray-800 text-white rounded-lg">
    <Link to="/" className="text-white no-underline">
      <img
        src="path/to/logo.png" 
        alt="Logo"
        className="h-10 w-auto"
      />
    </Link>
    <div className="flex space-x-2">
      <Link
        to="/"
        className="text-white no-underline px-4 py-2 rounded bg-green-600 hover:bg-green-700 transition duration-300"
      >
        Let's Play!
      </Link>
      <Link
        to="/add-words"
        className="text-white no-underline px-4 py-2 rounded bg-red-600 hover:bg-red-700 transition duration-300"
      >
        Add Words
      </Link>
    </div>
  </nav>
);

export default Header;
