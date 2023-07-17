import React from "react";
import Arrow from "./Arrow";
import "./css/TextArrow.css";

const TextArrow = ({ text, className }) => {
  return (
    <div className={`text-arrow-container ${className}`}>
      <span className="text-arrow-text">{text}</span>
      <Arrow />
    </div>
  );
};

export default TextArrow;
