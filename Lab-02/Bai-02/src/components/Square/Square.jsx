import React from "react";
import "./Square.css";

export default function Square({ value, onClick, className }) {
  return (
    <div className={`game-square ${className}`} onClick={onClick}>
      {value}
    </div>
  );
}
