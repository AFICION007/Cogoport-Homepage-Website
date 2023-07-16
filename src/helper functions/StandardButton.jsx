import React from "react";
import "./StandardButton.css";

const StandardButton = ({ text, className }) => {
  return <button className={`standard-button ${className}`}>{text}</button>;
};

export default StandardButton;
