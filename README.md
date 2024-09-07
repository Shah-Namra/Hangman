<!-- <<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
=======
# Hangman
>>>>>>> fb706624f4b39d46f54ad1c7156c032d53ec15e2 -->
# Hangman Game 🎮

Welcome to the **Hangman** game project! This is a fun, interactive Hangman game that I've developed to test both vocabulary and coding skills. It brings the classic game to life with some modern twists and my personal touch.

---

## Table of Contents 📑

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [How to Play](#how-to-play)
- [Technologies Used](#technologies-used)
- [Contribution](#contribution)
- [Contact Me](#contact-me)
- [TODO](#todo)

---

## Introduction ✨

**Hangman** is a word-guessing game where players try to guess a hidden word by suggesting letters within a limited number of attempts. I built this project as a way to merge my love for coding with the challenge of creating a fun, logic-driven game.

---

## Features 🚀

- **Interactive Gameplay**: Guess letters and see the stick figure gradually appear as incorrect guesses are made.
- **Word Categories**: Play with various word categories like movies, fruits, animals, and more!
- **Responsive Design**: The game works on all devices, whether you're on desktop or mobile.
- **Personal Touch**: Sleek, minimalistic design that represents my coding style.

---

## Installation ⚙️

Follow these steps to run the game locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Shah-Namra/Hangman.git
   ```
2. **Navigate to the project directory:**
  ```
  cd Hangman
  ```
3.  **Install necessary dependencies:**
  ```
  npm install
```
4. ``` npm install react-tsparticles ```