import React from "react";
import '../index.css'

// Define individual body parts
const HEAD = (
  <div
    style={{
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      border: "5px solid black",
      position: "absolute",
      top: "30px",
      right: "-15px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "5px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "60px",
      right: "0px",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "50px",
      height: "3px",
      background: "black",
      position: "absolute",
      top: "90px",
      right: "-50px",
      transform: "rotate(-30deg)",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "50px",
      height: "3px",
      background: "black",
      position: "absolute",
      top: "90px",
      right: "0px",
      transform: "rotate(30deg)",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "50px",
      height: "3px",
      background: "black",
      position: "absolute",
      top: "160px",
      right: "-50px",
      transform: "rotate(40deg)",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "50px",
      height: "3px",
      background: "black",
      position: "absolute",
      top: "160px",
      right: "0px",
      transform: "rotate(-40deg)",
      transformOrigin: "right bottom",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing: React.FC<HangmanDrawingProps> = ({ numberOfGuesses }) => {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "30px",
          width: "5px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "5px",
          width: "150px",
          background: "black",
          marginLeft: "90px",
        }}
      />
      <div
        style={{
          height: "155px",
          width: "5px",
          background: "black",
          marginLeft: "90px",
        }}
      />
      <div
        style={{
          height: "5px",
          width: "120px",
          background: "black",
        }}
      />
    </div>
  );
};

export default HangmanDrawing;
