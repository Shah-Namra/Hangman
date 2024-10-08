import styles from "./Keyboard.module.css";import '../index.css'

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  disabled?:boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

// const KeyWord = ({
//   activeLetters,
//   inactiveLetters,
//   disabled=false,
//   addGuessedLetter,
// }: KeyboardProps) => {
//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fit, minmax(50px,1fr))",
//         gap: ".5rem",
//       }}
//     >
//       {KEYS.map((key) => {
//         const isActive = activeLetters.includes(key);
//         const isInactive = inactiveLetters.includes(key);
//         return (
//           <button
//             onClick={() => addGuessedLetter(key)}
//             className={`${styles.btn} ${isActive ? styles.active : ""} ${
//               isInactive ? styles.inactive : ""
//             }`}
//             disabled={isInactive || isActive|| disabled}
//             key={key}
//           >
//             {key}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// export default KeyWord;
const KeyWord = ({ activeLetters, inactiveLetters, disabled = false, addGuessedLetter }: KeyboardProps) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(50px,1fr))",
      gap: ".5rem",
    }}
  >
    {KEYS.map((key) => {
      const isActive = activeLetters.includes(key);
      const isInactive = inactiveLetters.includes(key);
      return (
        <button
          onClick={() => addGuessedLetter(key)}
          className={`${styles.btn} ${isActive ? styles.active : ""} ${
            isInactive ? styles.inactive : ""
          }`}
          disabled={isInactive || isActive || disabled}
          key={key}
        >
          {key}
        </button>
      );
    })}
  </div>
);

export default KeyWord;