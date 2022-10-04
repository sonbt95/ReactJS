import React from "react";
import Square from "../Square/Square";
import "./Board.css";

const Board = (props) => {
  return (
    <div className="game-board">
      {props.square.map((item, index) => (
        <Square
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
        ></Square>
      ))}
    </div>
  );
};

export default Board;
