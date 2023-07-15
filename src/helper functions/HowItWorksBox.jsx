import React from "react";
import "./HowItWorksBox.css";

export default function HowItWorksBox({ SVG, id, head, textArr }) {
  return (
    <div className="main-container">
      <p className="stage">Stage {id}:</p>
      <div className="head-container">
        <SVG />
        <div className="how-it-works">{head}</div>
      </div>

      <div className="main">
        <ul className="list">
          {textArr.map((text) => (
            <li className="text">{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
