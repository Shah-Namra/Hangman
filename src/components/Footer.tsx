// import React from 'react';

// const Footer: React.FC = () => (
//   <footer
//     style={{
//       padding: "1rem",
//       textAlign: "center",
//       backgroundColor: "#333",
//       color: "#fff",
//       borderRadius: "8px",
//       marginTop: "2rem",
//     }}
//   >
//     <p>&copy; 2024 Hangman Game. All rights reserved. © 2024 My Company</p>
//   </footer>
// );

// export default Footer;
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 flex flex-col items-center">
      <div className="flex items-center mb-2">
        <img
          src="path/to/logo.png" // Replace with your logo path
          alt="Logo"
          className="w-12 h-12 mr-3"
        />
        <h1 className="text-xl font-semibold">Hangman Game</h1>
      </div>
      <div className="flex space-x-4 mb-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition duration-300"
        >
          <img
            src="path/to/github-icon.png" // Replace with your GitHub icon path
            alt="GitHub"
            className="w-8 h-8"
          />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition duration-300"
        >
          <img
            src="path/to/twitter-icon.png" // Replace with your Twitter icon path
            alt="Twitter"
            className="w-8 h-8"
          />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition duration-300"
        >
          <img
            src="path/to/linkedin-icon.png" // Replace with your LinkedIn icon path
            alt="LinkedIn"
            className="w-8 h-8"
          />
        </a>
      </div>
      <p className="text-sm">&copy; 2024 Hangman Game. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
