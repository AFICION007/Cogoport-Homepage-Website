import React from "react";
import "./css/StandardButton.css";

const StandardButton = ({ text, className }) => {
  return <button className={`standard-button ${className}`}>{text}</button>;
};

export default StandardButton;
